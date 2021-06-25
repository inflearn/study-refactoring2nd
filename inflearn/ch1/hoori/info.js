import { Info_v0 } from './info/v0.js';
import { Info_v1 } from './info/v1.js';

export const Info = (type, audience, name) => check(
  Info_v0(type, audience, name),
  Info_v1(type, audience, name),
);
