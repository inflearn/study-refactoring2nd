import { statement_v1 } from './statement/v1';
import { statement_v2 } from './statement/v2';
import { statement_v3 } from './statement/v3';
import { statement_v4 } from './statement/v4';
import { statement_v5 } from './statement/v5';
import { statement_v6 } from './statement/v6';
import { statement_v7 } from './statement/v7';
import { statement_v0 } from './statement/v0';

/** 오리지널 버전으로부터 단계별 리팩토링 진행 */
export const statementHoori = (invoice, plays) => check(
  statement_v0(invoice, plays), // 오리지널 버전
  statement_v1(invoice, plays),
  statement_v2(invoice, plays),
  statement_v3(invoice, plays),
  statement_v4(invoice, plays),
  statement_v5(invoice, plays),
  statement_v6(invoice, plays),
  statement_v7(invoice, plays),
);
