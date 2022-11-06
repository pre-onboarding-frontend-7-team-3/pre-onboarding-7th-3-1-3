import { TrendType } from 'models/types';

export type ResultType = {
  [index: string]: number;
};

const calculateData = (data: TrendType[]) => {
  const result: ResultType = {
    imp: 0,
    click: 0,
    cost: 0,
    conv: 0,
    convValue: 0,
    ctr: 0,
    cvr: 0,
    cpc: 0,
    cpa: 0,
    roas: 0,
  };
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (key in result) {
        result[key] += Number(item[key]);
      }
    });
  });
  return result;
};

export default calculateData;
