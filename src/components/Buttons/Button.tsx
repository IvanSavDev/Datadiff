import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #3d3d3d;
  border: 0;
  border-radius: 4px;
  outline: 0;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 1px solid red;
  }
`;

export const Compare = styled(Button)`
  width: 100%;
  grid-area: compare;
  align-self: start;
  justify-self: center;
  @media (max-width: 760px) {
    justify-self: end;
    width: auto;
  }
`;
