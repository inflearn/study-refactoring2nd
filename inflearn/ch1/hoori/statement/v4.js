/**
 * for 문을 함수로 변경하기 위해 for 문 내부와 외부의 의존성 낮추기.
 *
 * 1. for 문 내부에서 외부변수에 변화를 직접적으로 주는 대신,
 *    for 문 내부에 내부변수를 사용하여 해당 변수가 외부변수 변화의 연결고리 역할을 하도록 수정.
 *    아래의 경우 totalAmount, volumeCredits, result 가 for 문 안에서 변화되는 외부변수에 해당.
 *      * totalAmount: for 문 내부변수 amountByType 이 이미 그 역할을 하고 있음.
 *      * volumeCredits: 인원수에 따른 포인트 pointByAudience, 타입에 따른 포인트 pointByType, 및 두 포인트의 합 point,
 *                       point 역시 AmountByType 함수처럼 PointByType(type, audience) 함수를 만들면 졸을듯?!
 *      * result: description,
 * 2. for 문 내부에서 사용되는 외부변수 format 함수를 별도로 분리.
 *    이 때, 공히 쓰이는 / 100 부분을 format 함수 내부에서 수행하도록 수정 => formatUSD
 *
 * for 문을 함수로 변경하는 것은 switch 문을 함수로 변경한 것과 비슷한 맥락으로,
 * for 문에서 얻고자 하는 값(output)과, 그것을 계산하는데 필요한 값(input) 을 명확하게 표현하고,
 * 해당 로직을 분리하여 관리하기 위함.
 * */
import { formatUSD } from '../formatUSD.js';
import { PLAY_TYPE } from '../data.js';
import { AmountByType } from '../amount.js';
const { COMEDY } = PLAY_TYPE;

export const statement_v4 = ({ customer, performances }, plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${customer})\n`;

  for (let { playID, audience } of performances) {
    const { type, name } = plays[playID];
    const amountByType = AmountByType(type, audience);

    /**1**/
    const pointByAudience = Math.max(audience - 30, 0);
    const pointByType = COMEDY === type ? Math.floor(audience / 5) : 0;
    const point = pointByAudience + pointByType;
    const description = `  ${name}: ${/**2**/formatUSD(amountByType)} (${audience}석)\n`;
    volumeCredits += point;
    result += description;
    totalAmount += amountByType;
  }
  result += `총액: ${/**2**/formatUSD(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
};
