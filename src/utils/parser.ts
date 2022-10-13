import yaml from 'js-yaml';
import { FileFormats } from '../Enums/Enums';

const parser = (file: string, formatFile: string) => {
  if (formatFile === FileFormats.JSON) {
    const parsedFile = JSON.parse(file);
    return parsedFile;
  }

  if (formatFile === FileFormats.YAML) {
    const parsedFile = yaml.load(file);
    return parsedFile;
  }

  throw new Error(`Format not supported ${formatFile}`);
};

export default parser;
