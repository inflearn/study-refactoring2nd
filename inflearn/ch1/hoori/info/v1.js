import { AmountByType } from '../amount.js';
import { PLAY_TYPE } from '../config.js';
import { formatUSD } from '../formatUSD.js';

const { COMEDY } = PLAY_TYPE;

/** 인원수에 따른 포인트 */
const getBasePoint = audience => Math.max(audience - 30, 0);

/** 장르에 따른 추가 포인트 */
const getExtraPoint = (type, audience) => {
  return COMEDY === type ? Math.floor(audience / 5) : 0;
};

export const infoV1 = (type, audience, name) => {
  const amount = AmountByType(type, audience);
  return {
    amount,
    point: getBasePoint(audience) + getExtraPoint(type, audience),
    description: `  ${name}: ${formatUSD(amount)} (${audience}석)\n`
  };
};
