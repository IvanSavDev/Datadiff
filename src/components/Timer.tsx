import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WrapperTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 10px;
  width: 22px;
  height: 22px;
  border: 1.5px solid white;
  border-radius: 50%;
  font-size: 0.8rem;
`;

const Timer = ({
  startTimer,
  stopTimer,
}: {
  startTimer: number;
  stopTimer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [time, setTime] = useState<number>(startTimer);

  useEffect(() => {
    if (time === startTimer) {
      setTimeout(() => {
        setTime((previousTime) => previousTime - 1);
      }, 2000);
    } else if (time > 0) {
      setTimeout(function timeout() {
        setTime((previousTime) => previousTime - 1);
      }, 1000);
    } else {
      stopTimer('');
    }
  }, [time, stopTimer, startTimer]);

  return <WrapperTimer>{time}</WrapperTimer>;
};

export default Timer;
