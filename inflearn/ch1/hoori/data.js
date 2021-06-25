/** play.type 변수화 */
const TRAGEDY = 'tragedy', COMEDY = 'comedy';
export const PLAY_TYPE = { TRAGEDY, COMEDY };

/** playID 변수화 */
export const
  HAMLET = 'hamlet',
  AS_LIKE = 'as-like',
  OTHELLO = 'othello';

/**
 * 기존에 정의 된 데이터 plays 및 invoices 에도 다음과 같이 상수를 변수로 사용하는 것이 좋다.
 * 개발 과정중 오타로 인한 버그 발생율을 낮추고, 사용 지점을 추적하기 수월하여 추후 변경사항이 발생할 경우 수정이 용이하다. */
export const plays = {
  [HAMLET]: { 'name': 'Hamlet', 'type': TRAGEDY },
  [AS_LIKE]: { 'name': 'As You Like It', 'type': COMEDY },
  [OTHELLO]: { 'name': 'Othello', 'type': TRAGEDY },
};

export const invoices = [
  {
    'customer': 'BigCo',
    'performances': [
      {
        'playID': HAMLET,
        'audience': 55
      },
      {
        'playID': AS_LIKE,
        'audience': 35
      },
      {
        'playID': OTHELLO,
        'audience': 40
      },
    ]
  }
];
