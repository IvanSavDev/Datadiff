import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../components/Popup';

const PopupPortal = ({
  error,
  startTimer,
  stopTimer,
}: {
  error: string;
  startTimer: number;
  stopTimer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const node = document.getElementById('root') as Element;

  return ReactDOM.createPortal(
    <Popup error={error} startTimer={startTimer} stopTimer={stopTimer} />,
    node
  );
};

export default PopupPortal;
