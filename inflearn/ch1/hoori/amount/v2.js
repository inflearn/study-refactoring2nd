/**
 * 같은 부류의 데이터들을 변수화.
 *
 * 장르별 금액은 기본금액 + 추가금액 으로 결정되는데,
 * 기본금액 및 추가금액 부분을 따로 뗴어냄으로써 기본금액 정책과 추가금액 정책을 따로 관리할 수 있다.
 */
import { PLAY_TYPE } from '../config.js';

const { TRAGEDY, COMEDY } = PLAY_TYPE;

/** 장르(type)별 기본금액 (인원수와 관계없이 장르에 따른 기본요금) */
const BaseAmount = type => {
  if (type === TRAGEDY) return 40000;
  if (type === COMEDY) return 30000;
  throw new Error(`알 수 없는 장르: ${type}`);
};

/** 장르(type) 및 인원수(audience)에 따라 결정되는 추가요금 */
const ExtraAmount = (type, audience) => {
  /** 비극은 30명 초과분에 대하여 초과인원당 1000원씩 */
  if (type === TRAGEDY) {
    const baseAudience = 30;
    return audience > baseAudience ? 1000 * (audience - baseAudience) : 0;
  }

  /**
   * 희극은 추가금액이 2가지로 발생하는데,
   * 1. 20명 초과시 기본요금 10000원 + 초과인원당 500원씩
   * 2. 모든 인원에 대하여 300원씩
   */
  if (type === COMEDY) {
    const baseAudience = 20;
    return (audience > baseAudience ? 10000 + 500 * (audience - baseAudience) : 0) + (300 * audience);
  }

  throw new Error(`알 수 없는 장르: ${type}`);
};

export const AmountByType_v2 = (type, audience) => {
  return BaseAmount(type) + ExtraAmount(type, audience);
};
