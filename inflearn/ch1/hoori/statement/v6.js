/**
 * for 문 전체를 함수로 변경
 *
 * for 문을 함수로 변경하는 것은 switch 문을 함수로 변경한 것과 비슷한 맥락으로,
 * for 문에서 얻고자 하는 값(output)과, 그것을 계산하는데 필요한 값(input) 을 명확하게 표현하고,
 * 해당 로직을 분리하여 관리하기 위함.
 * */
import { formatUSD } from '../formatUSD.js';
import { sumInfo } from '../sumInfo.js';

export const statementV6 = ({ customer, performances }, plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${customer})\n`;

  const { totalAmount, totalPoint, totalDescription } = sumInfo(performances, plays);
  totalAmount += totalAmount;
  volumeCredits += totalPoint;
  result += totalDescription;

  result += `총액: ${formatUSD(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
};
