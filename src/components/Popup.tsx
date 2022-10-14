import React from 'react';
import styled, { keyframes } from 'styled-components';
import Timer from './Timer';

const rotate = keyframes`
  from {
    transform: translate(100%, 0);
  }

  to {
    transform: translate(0, 0);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 10px;
  margin-left: 20px;
  max-width: 100vh;
  padding: 25px 40px 20px 20px;
  outline: none;
  border: none;
  background-color: #3d3d3d;
  border-radius: 15px;
  color: white;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const Error = styled.span`
  color: red;
`;

const Popap = ({
  error,
  startTimer,
  stopTimer,
}: {
  error: string;
  startTimer: number;
  stopTimer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Wrapper>
      <div>
        <Error>Error: </Error>
        {error}
      </div>
      <Timer startTimer={startTimer} stopTimer={stopTimer}></Timer>
    </Wrapper>
  );
};

export default Popap;
