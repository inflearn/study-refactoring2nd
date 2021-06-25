/**
 * switch 문을 if return 패턴으로 변경 및 let 변수 제거.
 *
 * switch 문 외부의 let 변수를 두고, case 별로 let 변수를 변화시키는 패턴은,
 * let 변수가 결정되는 과정(흐름)을 파악하는데 어려움을 준다.
 *
 * 아래 함수에서는 장르(type)별로
 * 기본금액(baseAmount)에
 * 인원수(audience)와 기준인원수(baseAudience)에 따라 계산된 추가금액(extraAmount)을 더한 값이 최종 금액에 해당하는데,
 * 이렇게 분리하면 장르별 기본금액 및 추가금액 계산 로직을 따로 관리할 수 있다. (v2 참조)
 */
import { PLAY_TYPE } from '../config.js';

const { TRAGEDY, COMEDY } = PLAY_TYPE;

export const AmountByType_v1 = (type, audience) => {
  if (type === TRAGEDY) {
    const baseAmount = 40000;
    const baseAudience = 30;
    const extraAmount = audience > baseAudience ? 1000 * (audience - baseAudience) : 0;
    return baseAmount + extraAmount;
  }

  if (type === COMEDY) {
    const baseAmount = 30000;
    const baseAudience = 20;
    const extraAmount =
      (audience > baseAudience ? 10000 + 500 * (audience - baseAudience) : 0) + (300 * audience);
    return baseAmount + extraAmount;
  }

  throw new Error(`알 수 없는 장르: ${type}`);
};
