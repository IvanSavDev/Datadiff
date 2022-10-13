import _ from 'lodash';
import { TypesOfOperations } from '../../Enums/Enums';
import {
  ComparisonResultStructure,
  KeysComprasionResult,
} from '../../Types/Types';

const generateIndent = (
  depth = 1,
  indentWithOperators: boolean = false,
  baseSpaceCount = 4,
  symbol = ' '
) => {
  const indent = symbol.repeat(baseSpaceCount * depth);
  return indentWithOperators ? indent.slice(0, -2) : indent;
};

const stringify = (nodeValue: any, depth: number): string => {
  const indent = generateIndent(depth);
  const indentBeforeClosingBrace = generateIndent(depth - 1);
  if (!_.isObject(nodeValue) || nodeValue === null) {
    return `${nodeValue}`;
  }

  const linesList = Object.entries(nodeValue).map(
    ([key, value]) => `${indent}${key}: ${stringify(value, depth + 1)}`
  );

  return ['{', ...linesList, `${indentBeforeClosingBrace}}`].join('\n');
};

const setPatternStringOptions =
  (data: ComparisonResultStructure, indent: string, depth: number) =>
  (symbol: string = ' ', key: KeysComprasionResult = 'value') =>
    [`${indent}${symbol} ${data.name}: ${stringify(data[key], depth + 1)}`];

const stylish = (comparisonResult: ComparisonResultStructure[]) => {
  const iteration = (
    nodeList: ComparisonResultStructure[],
    depth = 1
  ): string => {
    const indent = generateIndent(depth, true);
    const indentBeforeClosingBrace = generateIndent(depth - 1);
    const getFormattedNodes = (
      node: ComparisonResultStructure,
      currentIndent: string,
      currentDepth: number
    ) => {
      const getPatterString = setPatternStringOptions(
        node,
        currentIndent,
        currentDepth
      );
      switch (node.type) {
        case TypesOfOperations.Add:
          return getPatterString('+');
        case TypesOfOperations.Delete:
          return getPatterString('-');
        case TypesOfOperations.Recursion:
          return [
            `${currentIndent}  ${node.name}: ${iteration(
              node.value,
              currentDepth + 1
            )}`,
          ];
        case TypesOfOperations.Changed:
          return `${getPatterString('-', 'value1')}\n${getPatterString(
            '+',
            'value2'
          )}`;
        case TypesOfOperations.Same:
          return getPatterString(' ');
        default:
          throw new Error(`This type does not exist: ${node.type}`);
      }
    };

    const linesList = nodeList.flatMap((node) =>
      getFormattedNodes(node, indent, depth)
    );

    return ['{', ...linesList, `${indentBeforeClosingBrace}}`].join('\n');
  };
  return iteration(comparisonResult);
};

export default stylish;
