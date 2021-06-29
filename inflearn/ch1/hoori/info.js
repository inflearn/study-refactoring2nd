import { infoV0 } from './info/v0';
import { infoV1 } from './info/v1';

export default info = (type, audience, name) => checkDiffrence(
  infoV0(type, audience, name),
  infoV1(type, audience, name),
);
