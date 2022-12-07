const Constant = Object.freeze({
  ZERO: 0,
  MIN: 1,
  MAX: 9,
  INCREASE: 1,
  LENGTH: 3,
  WIN: 3,
  OK: '1',
  NO: '2',
});

const Message = Object.freeze({
  START: '개선된 게임을 시작합니다.',
  INPUT: `숫자릉 입력하세여`,
  RESTART: `게임을 다시 시작 하시겠습니까 다시시작은 1 종료는 2`,
  WIN: '3스트라이크 입니다. 게임 종료',
});

const Score = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  EMPTY: '',
});

const Error = Object.freeze({
  NOT_NUMBER: '숫자가 아닙니다.',
  DUPLICATED: '중복된 글자 입니다.',
  NO_RIGTH_NUBER: '올바른 숫자를 입력하세요',
});

module.exports = {
  Constant,
  Message,
  Score,
  Error,
};
