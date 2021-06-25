import { AmountByType_v0 } from './amount/v0.js';
import { AmountByType_v1 } from './amount/v1.js';
import { AmountByType_v2 } from './amount/v2.js';

export const AmountByType = (type, audience) => check(
  AmountByType_v0(type, audience),
  AmountByType_v1(type, audience),
  AmountByType_v2(type, audience),
);
