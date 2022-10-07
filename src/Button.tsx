import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #1976d2;
  border: 0;
  border-radius: 4px;
  outline: 0;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

export const GridButton = styled(Button)<{
  gridArea: string;
  alignSelf?: string;
  justifySelf?: string;
}>`
  grid-area: ${(props) => props.gridArea};
  align-self: ${(props) => props.alignSelf};
  justify-self: ${(props) => props.justifySelf};
  @media (max-width: 760px) {
    align-self: end;
  }
`;
