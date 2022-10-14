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
  width: 80%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 20px;
`;

const Pre = styled.pre`
  width: 100%;
  padding: 15px 15px;
  overflow: auto;
  border-radius: 15px;
  background-color: #3d3d3d;
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
