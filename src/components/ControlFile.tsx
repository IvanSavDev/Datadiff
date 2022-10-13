import React from 'react';
import styled from 'styled-components';
import AddFile from './AddFile';
import FormatFile from './FormatFile';

const Textarea = styled.textarea<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 10px;
  resize: none;
  outline: none;
  border: none;
  box-shadow: 0 0 5px black;
  background-color: #3d3d3d;
  border-radius: 15px;
  color: white;
`;

const WrapperOptions = styled.div<{ gridArea: string }>`
  display: flex;
  grid-area: ${(props) => props.gridArea};
  gap: 10px;
`;

const ControlFile = ({
  text,
  changeText,
  name,
}: {
  text: string;
  changeText: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}) => (
  <>
    <WrapperOptions gridArea={`${name}FileOptions`}>
      <AddFile addFile={changeText} name={name} />
      <FormatFile
        tabIndex={name === 'first' ? 3 : 5}
        name={`${name}FileInputFormat`}
      />
    </WrapperOptions>
    <Textarea
      value={text}
      onChange={(event: React.SyntheticEvent) => {
        const target = event.target as HTMLTextAreaElement;
        changeText(target.value);
      }}
      gridArea={`${name}Field`}
      required
      name={`${name}File`}
      tabIndex={name === 'first' ? 6 : 7}
    ></Textarea>
  </>
);

export default ControlFile;
