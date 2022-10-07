import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './Select';

const WrapperSelect = styled.div`
  align-self: flex-start;
  color: white;
  width: 100%;
  grid-area: formatters;
  @media (max-width: 760px) {
    width: auto;
  }
`;

// const Select = styled.select`
//   height: 35px;
//   width: 100%;
//   padding: 6px 2px;
//   box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
//     0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
//   background-color: #1976d2;
//   border-radius: 4px;
//   outline: 0;
//   color: white;
//   font-size: 0.875rem;
//   letter-spacing: 0.03em;
//   @media (max-width: 760px) {
//     width: auto;
//   }
// `;

const FormattersText = styled.p`
  margin: 0;
  margin-bottom: 5px;
  @media (max-width: 760px) {
    display: inline;
  }
`;

const Formatters = () => {
  return (
    <WrapperSelect>
      <FormattersText>Formatters: </FormattersText>
      {/* <Select
        value={formatFile}
        onChange={(event) => setFormatFile(event.target.value)}
      >
        <option value="stylish">Stylish</option>
        <option value="plain">Plain</option>
        <option value="json">JSON</option>
      </Select> */}
      <Select defaultState="stylish">
        <option value="stylish">Stylish</option>
        <option value="plain">Plain</option>
        <option value="json">JSON</option>
      </Select>
    </WrapperSelect>
  );
};

export default Formatters;
