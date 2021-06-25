/** 불필요한 let 변수 제거 */
import { formatUSD } from '../formatUSD.js';
import { sumInfo } from '../sumInfo.js';

export const statement_v7 = ({ customer, performances }, plays) => {
  const { sumAmount, sumPoint, sumDescription } = sumInfo(performances, plays);
  return `청구내역 (고객명: ${customer})\n` +
    sumDescription +
    `총액: ${formatUSD(sumAmount)}\n` +
    `적립 포인트: ${sumPoint}점\n`;
};
