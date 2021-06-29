/** 불필요한 let 변수 제거 */
import { formatUSD } from '../formatUSD.js';
import { sumInfo } from '../sumInfo.js';

export const statementV7 = ({ customer, performances }, plays) => {
  const { totalAmount, totalPoint, totalDescription } = sumInfo(performances, plays);
  return `청구내역 (고객명: ${customer})\n` +
    totalDescription +
    `총액: ${formatUSD(totalAmount)}\n` +
    `적립 포인트: ${totalPoint}점\n`;
};
