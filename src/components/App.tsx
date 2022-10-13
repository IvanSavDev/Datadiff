import React, { useState } from 'react';
import styled from 'styled-components';
import Formatters from './Formatters';
import { Compare } from './Buttons/Button';
import parser from '../utils/parser';
import diff from '../utils/diff';
import getFormat from '../utils/formatters';
import ControlFile from './ControlFile';
import ResultPage from './ResultPage';
import { useNavigate } from 'react-router-dom';
import Description from './Description';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
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
  max-height: 650px;
  padding: 20px 0;
  flex-grow: 1;
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
  background-color: #3d3d3d;
  padding: 10px;
  border-radius: 15px;
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
  const navigate = useNavigate();

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const files = event.target as File;
    const firstFileInputFormat = files.firstFileInputFormat.value;
    const secondFileInputFormat = files.secondFileInputFormat.value;
    const firstFileContents = files.firstFile.value;
    const secondFileContents = files.secondFile.value;
    const outputFormat = files.outputFormat.value;
    const firstParsedFile = parser(firstFileContents, firstFileInputFormat);
    const secondParsedFile = parser(secondFileContents, secondFileInputFormat);
    const diffFiles = diff(firstParsedFile, secondParsedFile);
    const result = getFormat(diffFiles, outputFormat);
    setComparisonResult(result);
    navigate('/result', { state: result });
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
    </Wrapper>
  );
}

export default App;
