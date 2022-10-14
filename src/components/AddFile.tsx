import React from 'react';
import styled from 'styled-components';
import loadImg from '../assets/img/load.svg';

const Label = styled.label`
  display: inline-block;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-image: url(${loadImg});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 1px solid red;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const AddFile = ({
  addFile,
  name,
}: {
  addFile: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}) => {
  function readFile(input: HTMLInputElement) {
    const files = input.files;
    if (files) {
      const reader = new FileReader();
      const file = files[0];
      reader.readAsText(file);
      reader.onload = function () {
        const result = reader.result;
        if (typeof result === 'string') {
          addFile(result);
        }
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  }

  return (
    <div className="wrapper-text">
      <span>Добавить файл:</span>
      <Label tabIndex={name === 'first' ? 2 : 4} htmlFor={name} />
      <Input
        id={name}
        name={name}
        type="file"
        onChange={(event) => readFile(event.target)}
      />
    </div>
  );
};

export default AddFile;
