import React from 'react';
import styled from 'styled-components';
import Formatters from './Formatters';
import { GridButton } from './Button';
import SelectFile from './SelectFile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`;

// const Form = styled.form`
//   /* height: 100%; */
//   display: flex;
//   gap: 10px;
//   flex-grow: 1;
//   max-height: 650px;
//   padding: 20px 0;
//   @media (max-width: 760px) {
//     flex-direction: column;
//   }
// `;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    'firstAdd . secondAdd'
    'firstField formatters secondField'
    'firstField compare secondField';
  gap: 10px;
  max-height: 650px;
  padding: 20px 0;
  flex-grow: 1;
  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto auto 1fr;
    grid-template-areas:
      'firstAdd firstAdd'
      'firstField firstField'
      'formatters compare'
      'secondAdd secondAdd'
      'secondField secondField';
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 2.5rem;
  color: white;
`;

// const WrapperTextarea = styled.div`
//   display: flex;
//   /* height: 100%; */
//   flex-direction: column;
//   flex: 1 1 auto;
//   gap: 10px;
// `;

const Textarea = styled.textarea<{ gridArea: string }>`
  width: 100%;
  height: 100%;
  /* flex: 1 1 100%; */
  padding: 5px;
  resize: vertical;
  outline: none;
  border: none;
  box-shadow: 0 0 5px black;
  min-height: 200px;
  grid-area: ${(props) => props.gridArea};
`;

// const WrapperButton = styled.div`
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 760px) {
//     flex-direction: row;
//     justify-content: space-around;
//     gap: 10px;
//   }
// `;

const Description = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

type FirstFileElement = EventTarget & { firstFile: HTMLTextAreaElement };
type SecondFileElement = EventTarget & { secondFile: HTMLTextAreaElement };

function App() {
  return (
    <Wrapper>
      <Header>Data-diff</Header>
      <Main>
        <Description>
          Данная программа позволяет определять разницу между двумя форматами
          данных. Подобный механизм используется при выводе тестов или при
          автоматическом отслеживании изменений в конфигурационных файлах.
        </Description>
        <p>Возможности утилиты:</p>
        <ul>
          <li>Поддержка разных форматов ввода: yaml, json</li>
          <li>Генерация отчетов в виде обычного текста, stylish и json</li>
        </ul>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            const firstTextarea = event.target as FirstFileElement;
            const secondTextarea = event.target as SecondFileElement;
          }}
        >
          <SelectFile gridArea="firstAdd" />
          <Textarea gridArea="firstField" required name="firstFile"></Textarea>
          {/* <WrapperButton> */}
          <Formatters />
          <GridButton gridArea="compare" alignSelf="start" justifySelf="end">
            Compare
          </GridButton>
          {/* </WrapperButton> */}
          <SelectFile gridArea={'secondAdd'} />
          <Textarea
            gridArea="secondField"
            required
            name="secondFile"
          ></Textarea>
        </Form>
      </Main>
    </Wrapper>
  );
}

export default App;
