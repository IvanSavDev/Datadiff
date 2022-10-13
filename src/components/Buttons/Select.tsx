import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select<{ widthElement?: string }>`
  height: 35px;
  width: ${(props) => props.widthElement};
  padding: 6px 2px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #3d3d3d;
  border: none;
  border-radius: 4px;
  outline: none;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  @media (max-width: 760px) {
    width: auto;
  }
  &:focus-visible {
    outline: 1px solid red;
  }
`;

type Props = React.PropsWithChildren<{
  defaultState: string;
  width?: string;
  name: string;
  tabIndex: number;
}>;

const Select = ({ defaultState, children, width, name, tabIndex }: Props) => {
  const [value, setValue] = useState(defaultState);
  return (
    <StyledSelect
      tabIndex={tabIndex}
      value={value}
      widthElement={width}
      name={name}
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
