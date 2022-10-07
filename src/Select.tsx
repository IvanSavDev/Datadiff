import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  height: 35px;
  width: 100%;
  padding: 6px 2px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #1976d2;
  border-radius: 4px;
  outline: 0;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  @media (max-width: 760px) {
    width: auto;
  }
`;

type Props = {
  defaultState: string;
  options: [
    {
      [key: string]: string;
    }
  ];
};

// const Select = ({ defaultState, options }: Props) => {
//   const [formatFile, setFormatFile] = useState(defaultState);
//   return (
//     <StyledSelect
//       value={formatFile}
//       onChange={(event: React.SyntheticEvent) => {
//         const target = event.target as EventTarget & { value: string };
//         setFormatFile(target.value);
//       }}
//     >
//       {options.map((option) => {
//         const [key, value] = Object.entries(option);
//         return <option value={value}>{key}</option>;
//       })}
//       <option value="stylish">Stylish</option>
//       <option value="plain">Plain</option>
//       <option value="json">JSON</option>
//     </StyledSelect>
//   );
// };

const Select = ({
  defaultState,
  children,
}: React.PropsWithChildren<{ defaultState: string }>) => {
  const [value, setValue] = useState(defaultState);
  return (
    <StyledSelect
      value={value}
      onChange={(event: React.SyntheticEvent) => {
        const target = event.target as EventTarget & { value: string };
        setValue(target.value);
      }}
    >
      {children}
    </StyledSelect>
  );
};

export default Select;
