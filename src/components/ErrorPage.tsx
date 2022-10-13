import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Buttons/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <span>
        Что-то пошло не так, попробуйте вернуться на начальную страницу
      </span>
      <Button as={Link} to="/">
        Назад
      </Button>
    </Wrapper>
  );
};

export default ErrorPage;
