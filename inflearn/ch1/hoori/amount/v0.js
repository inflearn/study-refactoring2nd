/** statement 함수의 switch 문을 그대로 옮긴 오리지널 버전 */
import { PLAY_TYPE } from '../data.js';

const { TRAGEDY, COMEDY } = PLAY_TYPE;

export const AmountByType_v0 = (type, audience) => {
  let thisAmount = 0;

  switch (type) {
    case /**1**/
    TRAGEDY: // 비극
      thisAmount = 40000;
      const /**2**/tragedyBaseAudience = 30;
      if (audience > /**2**/tragedyBaseAudience) {
        thisAmount += 1000 * (audience - /**2**/tragedyBaseAudience);
      }
      return thisAmount;
    case /**1**/
    COMEDY: // 희극
      thisAmount = 30000;
      const /**2**/comedyBaseAudience = 20;
      if (audience > /**2**/comedyBaseAudience) {
        thisAmount += 10000 + 500 * (audience - /**2**/comedyBaseAudience);
      }
      thisAmount += 300 * audience;
      return thisAmount;
    default:
      throw new Error(`알 수 없는 장르: ${type}`);
  }
};
