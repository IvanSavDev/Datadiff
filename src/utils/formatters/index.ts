import json from './json';
import plain from './plain';
import stylish from './stylish';
import { ComparisonResultStructure } from '../../Types/Types';
import { ResultFormat } from '../../Enums/Enums';

const getFormat = (
  comparisonResult: ComparisonResultStructure[],
  formatName: string
) => {
  switch (formatName) {
    case ResultFormat.Stylish:
      return stylish(comparisonResult);
    case ResultFormat.Plain:
      return plain(comparisonResult);
    case ResultFormat.JSON:
      return json(comparisonResult);
    default:
      throw new Error(`No such format ${formatName}`);
  }
};

export default getFormat;
