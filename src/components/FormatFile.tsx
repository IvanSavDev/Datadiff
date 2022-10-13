import React from 'react';
import Select from './Buttons/Select';

type Props = {
  name: string;
  tabIndex: number;
};

const FormatFile = ({ name, tabIndex }: Props) => (
  <div className="wrapper-text">
    <span>Формат файла:</span>
    <Select tabIndex={tabIndex} name={name} defaultState="json">
      <option value="json">JSON</option>
      <option value="yaml">YAML</option>
    </Select>
  </div>
);

export default FormatFile;
