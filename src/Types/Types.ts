export type ComparisonResultStructure = {
  type: string;
  name: string;
  value?: any;
  value1?: any;
  value2?: any;
};

export type KeysComprasionResult = keyof ComparisonResultStructure;

export type FileStructure = {
  [key: string]: any;
};
