import React, { useState } from 'react';
import type {} from 'styled-components/cssprop';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import diff from '../utils/diff';
import parser from '../utils/parser';
import getFormat from '../utils/formatters';
import Formatters from './Formatters';
import { Compare } from './Buttons/Button';
import ControlFile from './ControlFile';
import ResultPage from './ResultPage';
import Description from './Description';
import PopupPortal from '../Portals/PopupPortal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    'firstFileOptions . secondFileOptions'
    'firstField formatters secondField'
    'firstField compare secondField';
  gap: 10px;
  flex-grow: 1;
  max-height: 650px;
  padding: 20px 0;
  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto auto 1fr;
    grid-template-areas:
      'firstFileOptions firstFileOptions'
      'firstField firstField'
      'formatters compare'
      'secondFileOptions secondFileOptions'
      'secondField secondField';
  }
`;

const Header = styled.header`
  padding: 20px 0;
  font-size: 2.5rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const WrapperHeader = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 15px;
  background-color: #3d3d3d;
`;

type File = EventTarget & {
  firstFile: HTMLTextAreaElement;
  secondFile: HTMLTextAreaElement;
  firstFileInputFormat: HTMLSelectElement;
  secondFileInputFormat: HTMLSelectElement;
  outputFormat: HTMLSelectElement;
};

function App() {
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const files = event.target as File;
      const firstFileInputFormat = files.firstFileInputFormat.value;
      const secondFileInputFormat = files.secondFileInputFormat.value;
      const firstFileContents = files.firstFile.value;
      const secondFileContents = files.secondFile.value;
      const outputFormat = files.outputFormat.value;
      const firstParsedFile = parser(firstFileContents, firstFileInputFormat);
      const secondParsedFile = parser(
        secondFileContents,
        secondFileInputFormat
      );
      const diffFiles = diff(firstParsedFile, secondParsedFile);
      const result = getFormat(diffFiles, outputFormat);
      setComparisonResult(result);
      navigate('/result', { state: result });
    } catch (error) {
      setError('Неверный формат файла');
      // setTimeout(() => {
      //   setError('');
      // }, 5000);
    }
  };

  return (
    <Wrapper>
      <Header>
        <WrapperHeader>Data-diff</WrapperHeader>
      </Header>
      {comparisonResult ? (
        <ResultPage />
      ) : (
        <Main>
          <Description
            addFirstFile={setFirstText}
            addSecondFile={setSecondText}
          />
          <Form onSubmit={submitHandler}>
            <ControlFile
              text={firstText}
              changeText={setFirstText}
              name="first"
            />
            <Formatters />
            <Compare tabIndex={9}>Compare</Compare>
            <ControlFile
              text={secondText}
              changeText={setSecondText}
              name="second"
            />
          </Form>
        </Main>
      )}
      {error && (
        <PopupPortal error={error} startTimer={5} stopTimer={setError} />
      )}
    </Wrapper>
  );
}

export default App;
