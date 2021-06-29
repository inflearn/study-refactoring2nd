import { AmountByType } from '../amount.js';
import { PLAY_TYPE } from '../config.js';
import { formatUSD } from '../formatUSD.js';

const { COMEDY } = PLAY_TYPE;

export const infoV0 = (type, audience, name) => {
  const amount = AmountByType(type, audience);
  const pointByAudience = Math.max(audience - 30, 0);
  const pointByType = COMEDY === type ? Math.floor(audience / 5) : 0;
  const point = pointByAudience + pointByType;
  const description = `  ${name}: ${formatUSD(amount)} (${audience}석)\n`;
  return { amount, point, description };
};
