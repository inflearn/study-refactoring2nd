import { AmountByType_v0 } from './amount/v0.js';
import { getAmountByTypeV1 } from './amount/v1.js';
import { getAmountByTypeV2 } from './amount/v2.js';

export const AmountByType = (type, audience) => checkDiffrence(
  AmountByType_v0(type, audience),
  getAmountByTypeV1(type, audience),
  getAmountByTypeV2(type, audience),
);
