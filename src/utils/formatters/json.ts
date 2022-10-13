import { ComparisonResultStructure } from '../../Types/Types';

const json = (comparisonResult: ComparisonResultStructure[]) =>
  JSON.stringify(comparisonResult);

export default json;
