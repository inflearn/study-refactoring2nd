/**
 * (규모가 있는) switch 문을 함수로 변경
 *
 * 1. 해당 switch 문은 장르별 금액을 계산하기 위함이고, 이 때 인원수도 계산에 필요한 값.
 *    즉, type 과 audience 로부터 thisAmount 가 결정되는 과정을 함수로 만들자.
 *    function(type, audience) -> amount
 *
 * 이유1: switch 문에서 얻고자 하는 결과값(output)과 그것을 얻는데 필요한 값(input)을 뚜렷하게 표현할 수 있고,
 *         이로 인해 추후 해당 함수 로직의 변경이 필요한 경우 코드 수정이 용이함.
 *       ex) 금액을 결정하는데 있어 장르(type)와 인원수(audience) 외에 할인 정책 추가.
 *           결제 수단에 따라 금액이 달라지는 경우. 등..
 * 이유2: 부분적인 로직을 따로 떼어냄으로써 해당 로직만 별도로 테스트하여 검증할 수 있다.
 * */
import { PLAY_TYPE } from '../config.js';
import { AmountByType } from '../amount.js';
const { COMEDY } = PLAY_TYPE;
export const statement_v3 = ({ customer, performances }, plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${customer})\n`;
  const format = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format;

  for (let { playID, audience } of performances) {
    const { type, name } = plays[playID];
    // let thisAmount = 0;
    //
    // switch (type) {
    //   case /**1**/TRAGEDY: // 비극
    //     thisAmount = 40000;
    //     const /**2**/tragedyBaseAudience = 30;
    //     if (audience > /**2**/tragedyBaseAudience) {
    //       thisAmount += 1000 * (audience - /**2**/tragedyBaseAudience);
    //     }
    //     break;
    //   case /**1**/COMEDY: // 희극
    //     thisAmount = 30000;
    //       const /**2**/comedyBaseAudience = 20;
    //     if (audience > /**2**/comedyBaseAudience) {
    //       thisAmount += 10000 + 500 * (audience - /**2**/comedyBaseAudience);
    //     }
    //     thisAmount += 300 * audience;
    //     break;
    //   default:
    //     throw new Error(`알 수 없는 장르: ${type}`);
    // }
    /**1**/const amountByType = AmountByType(type, audience);
    // 포인트 적립
    volumeCredits += Math.max(audience - 30, 0);
    // 희극은 관객 5명마다 추가 포인트
    if (COMEDY === type) volumeCredits += Math.floor(audience / 5);

    // 청구 내역 출력
    result += `  ${name}: ${format(amountByType / 100)} (${audience}석)\n`;
    totalAmount += amountByType;
  }
  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
};
