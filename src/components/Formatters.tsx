import React from 'react';
import styled from 'styled-components';
import Select from './Buttons/Select';

const WrapperSelect = styled.div`
  grid-area: formatters;
  align-self: flex-start;
  width: 100%;
  color: white;
  @media (max-width: 760px) {
    width: auto;
  }
`;

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
      <FormattersText>Формат результата: </FormattersText>
      <Select
        tabIndex={8}
        name="outputFormat"
        defaultState="stylish"
        width="100%"
      >
        <option value="stylish">Stylish</option>
        <option value="plain">Plain</option>
        <option value="json">JSON</option>
      </Select>
    </WrapperSelect>
  );
};

export default Formatters;
