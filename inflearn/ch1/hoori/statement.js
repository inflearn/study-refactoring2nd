import { statementV1 } from './statement/v1';
import { statementV2 } from './statement/v2';
import { statementV3 } from './statement/v3';
import { statementV4 } from './statement/v4';
import { statementV5 } from './statement/v5';
import { statementV6 } from './statement/v6';
import { statementV7 } from './statement/v7';
import { statementV0 } from './statement/v0';

/** 오리지널 버전으로부터 단계별 리팩토링 진행 */
export const statementHoori = (invoice, plays) => checkDiffrence(
  statementV0(invoice, plays), // 오리지널 버전
  statementV1(invoice, plays),
  statementV2(invoice, plays),
  statementV3(invoice, plays),
  statementV4(invoice, plays),
  statementV5(invoice, plays),
  statementV6(invoice, plays),
  statementV7(invoice, plays),
);
