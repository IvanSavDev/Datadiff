import path from 'path';
import yaml from 'js-yaml';

const parse = (fileName, fileData) => {
  const formatFile = path.extname(fileName).slice(1);

  if (formatFile === 'json') {
    const parsedFile = JSON.parse(fileData, 'UTF-8');
    return parsedFile;
  }

  if (formatFile === 'yaml' || formatFile === 'yml') {
    const parsedFile = yaml.load(fileData);
    return parsedFile;
  }

  throw new Error(`Format not supported ${formatFile}`);
};

export default parse;
