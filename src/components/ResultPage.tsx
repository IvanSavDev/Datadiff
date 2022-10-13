import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Buttons/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 20px;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`;

const Pre = styled.pre`
  padding: 15px 15px;
  overflow: auto;
  background-color: #3d3d3d;
  border-radius: 15px;
  width: 80%;
`;

const Code = styled.code`
  background-color: #3d3d3d;
  color: white;
`;

const Header = styled.h1`
  margin: 0;
`;

const ResultPage = () => {
  const { state } = useLocation();
  return (
    <Wrapper>
      <Header>Результат сравнения:</Header>
      <Pre>
        <Code>{state}</Code>
      </Pre>
      <Button as={Link} to="/">
        Назад
      </Button>
    </Wrapper>
  );
};

export default ResultPage;
