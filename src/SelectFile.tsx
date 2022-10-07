import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Span = styled.span`
  margin-right: 5px;
`;

const Wrapper = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
`;

type Props = {
  gridArea: string;
};

const SelectFile = ({ gridArea }: Props) => {
  return (
    <Wrapper gridArea={gridArea}>
      <Span>Добавить файл:</Span>
      <Button>добавить</Button>
    </Wrapper>
  );
};

export default SelectFile;
