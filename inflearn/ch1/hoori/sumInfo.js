import info from './info.js';

export const sumInfo = (performances, plays) => {
  let totalAmount = 0;
  let totalPoint = 0;
  let totalDescription = '';

  for (let { playID, audience } of performances) {
    const { type, name } = plays[playID];
    const { amount, point, description } = info(type, audience, name);
    totalAmount += amount;
    totalPoint += point;
    totalDescription += description;
  }

  return { totalAmount, totalPoint, totalDescription };
};
