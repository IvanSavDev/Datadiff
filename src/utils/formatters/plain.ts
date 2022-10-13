import _ from 'lodash';
import { TypesOfOperations } from '../../Enums/Enums';
import { ComparisonResultStructure } from '../../Types/Types';

const getCurrentFormat = (value: unknown) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return _.isObject(value) ? '[complex value]' : value;
};

const plain = (comparisonResult: ComparisonResultStructure[]): string => {
  const iteration = (
    nodeList: ComparisonResultStructure[],
    keychain = ''
  ): string => {
    const getFormattedNode = (
      node: ComparisonResultStructure,
      keychain = ''
    ) => {
      const nodeName = keychain ? `${keychain}.${node.name}` : `${node.name}`;
      const nodeValue = node.value;

      switch (node.type) {
        case TypesOfOperations.Add:
          return `Property '${nodeName}' was added with value: ${getCurrentFormat(
            nodeValue
          )}`;
        case TypesOfOperations.Delete:
          return `Property '${nodeName}' was removed`;
        case TypesOfOperations.Recursion:
          return iteration(node.value, nodeName);
        case TypesOfOperations.Changed:
          return `Property '${nodeName}' was updated. From ${getCurrentFormat(
            node.value1
          )} to ${getCurrentFormat(node.value2)}`;
        case TypesOfOperations.Same:
          return [];
        default:
          throw new Error(`This type does not exist: ${node.type}`);
      }
    };

    const linesList = nodeList.flatMap((element) =>
      getFormattedNode(element, keychain)
    );

    return linesList.join('\n');
  };

  return iteration(comparisonResult);
};

export default plain;
