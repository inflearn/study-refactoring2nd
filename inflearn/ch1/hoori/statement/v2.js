/**
 * 상수의 변수화.
 *
 * 1. switch 문의 장르명 'tragedy', 'comedy' 변수화.
 *    이것은 해당 데이터인 plays 의 play.type 뿐 아니라 invoices 의 invoice.playID 에도 적용이 필요하다.
 * 2. 장르별 금액 산정시 기준점이 되는 인원수(비극 30, 희극 20)를 각각 tragedyBaseAudience, comedyBaseAudience 변수화.
 *
 * 이유: 이것도 일종의 하드코딩이 아닐런지.. 수정이 필요한 경우 분산된 수정 지점을 하나로 모아주어 버그 발생율을 줄일 수 있다.
 * */
import { PLAY_TYPE } from '../config.js';
const /**1**/{ TRAGEDY, COMEDY } = PLAY_TYPE;
export const statementV2 = ({ customer, performances }, plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${customer})\n`;
  const format = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format;

  for (let { playID, audience } of performances) {
    const { type, name } = plays[playID];
    let thisAmount = 0;

    switch (type) {
      case /**1**/
      TRAGEDY: // 비극
        thisAmount = 40000;
        const /**2**/tragedyBaseAudience = 30;
        if (audience > /**2**/tragedyBaseAudience) {
          thisAmount += 1000 * (audience - /**2**/tragedyBaseAudience);
        }
        break;
      case /**1**/
      COMEDY: // 희극
        thisAmount = 30000;
        const /**2**/comedyBaseAudience = 20;
        if (audience > /**2**/comedyBaseAudience) {
          thisAmount += 10000 + 500 * (audience - /**2**/comedyBaseAudience);
        }
        thisAmount += 300 * audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${type}`);
    }
    // 포인트 적립
    volumeCredits += Math.max(audience - 30, 0);
    // 희극은 관객 5명마다 추가 포인트
    if (/**1**/COMEDY === type) volumeCredits += Math.floor(audience / 5);

    // 청구 내역 출력
    result += `  ${name}: ${format(thisAmount / 100)} (${audience}석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
};
