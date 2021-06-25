import { Info } from './info.js';

export const sumInfo = (performances, plays) => {
  let sumAmount = 0;
  let sumPoint = 0;
  let sumDescription = '';

  for (let { playID, audience } of performances) {
    const { type, name } = plays[playID];
    const { amount, point, description } = Info(type, audience, name);
    sumAmount += amount;
    sumPoint += point;
    sumDescription += description;
  }

  return { sumAmount, sumPoint, sumDescription };
};
