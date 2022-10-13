import React from 'react';
import styled from 'styled-components';
import { Button } from './Buttons/Button';
import firstTestJSON from '../utils/testData/file1.json';
import secondTestJSON from '../utils/testData/file2.json';

const ExampleFiles = styled.span`
  margin-right: 5px;
`;

type Props = {
  addFirstFile: React.Dispatch<React.SetStateAction<string>>;
  addSecondFile: React.Dispatch<React.SetStateAction<string>>;
};

const Description = ({ addFirstFile, addSecondFile }: Props) => (
  <>
    <p>
      Данная программа позволяет определять разницу между двумя форматами
      данных. Подобный механизм используется при выводе тестов или при
      автоматическом отслеживании изменений в конфигурационных файлах.
    </p>
    <p>Возможности утилиты:</p>
    <ul>
      <li>Поддержка разных форматов ввода: yaml, json</li>
      <li>Генерация отчетов в виде обычного текста, stylish и json</li>
    </ul>
    <div>
      <ExampleFiles>
        Если вы хотите протестировать систему, можете воспользоваться тестовыми
        данными:
      </ExampleFiles>
      <Button
        tabIndex={1}
        onClick={() => {
          addFirstFile(JSON.stringify(firstTestJSON, null, '    '));
          addSecondFile(JSON.stringify(secondTestJSON, null, '    '));
        }}
      >
        Загрузить
      </Button>
    </div>
  </>
);

export default Description;
