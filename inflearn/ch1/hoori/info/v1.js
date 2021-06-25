import { AmountByType } from '../amount.js';
import { PLAY_TYPE } from '../data.js';
import { formatUSD } from '../formatUSD.js';

const { COMEDY } = PLAY_TYPE;

/** 인원수에 따른 포인트 */
const BasePoint = audience => Math.max(audience - 30, 0);

/** 장르에 따른 추가 포인트 */
const ExtraPoint = (type, audience) => {
  if (COMEDY === type) return Math.floor(audience / 5);
  return 0;
};

export const Info_v1 = (type, audience, name) => {
  const amount = AmountByType(type, audience);
  return {
    amount,
    point: BasePoint(audience) + ExtraPoint(type, audience),
    description: `  ${name}: ${formatUSD(amount)} (${audience}석)\n`
  };
};
