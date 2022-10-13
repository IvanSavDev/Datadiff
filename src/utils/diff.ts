import _ from 'lodash';
import { TypesOfOperations } from '../Enums/Enums';
import { ComparisonResultStructure, FileStructure } from '../Types/Types';

const sortUniqKeys = (firstObject: Object, secondObject: Object) => {
  const keys = Object.keys(firstObject).concat(Object.keys(secondObject));
  const uniqKeys = Array.from(new Set(keys));
  const sortedKeys = _.sortBy(uniqKeys);
  return sortedKeys;
};

const diff = (
  firstFile: FileStructure,
  secondFile: FileStructure
): ComparisonResultStructure[] => {
  const sortedKeys = sortUniqKeys(firstFile, secondFile);

  return sortedKeys.map((key) => {
    const firstFileValue = firstFile[key];
    const secondFileValue = secondFile[key];

    if (!_.has(firstFile, key)) {
      return { type: TypesOfOperations.Add, name: key, value: secondFileValue };
    }

    if (!_.has(secondFile, key)) {
      return {
        type: TypesOfOperations.Delete,
        name: key,
        value: firstFileValue,
      };
    }

    if (_.isPlainObject(firstFileValue) && _.isPlainObject(secondFileValue)) {
      return {
        type: TypesOfOperations.Recursion,
        name: key,
        value: diff(firstFileValue, secondFileValue),
      };
    }

    if (firstFileValue !== secondFileValue) {
      if (_.has(firstFile, key) && _.has(secondFile, key)) {
        return {
          type: TypesOfOperations.Changed,
          name: key,
          value1: firstFileValue,
          value2: secondFileValue,
        };
      }
    }

    return { type: TypesOfOperations.Same, name: key, value: firstFileValue };
  });
};

export default diff;
