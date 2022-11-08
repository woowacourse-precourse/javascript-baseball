const RESULT = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
};

const END_OPTION = {
  RESTART: 1,
  EXIT: 2,
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR = {
  LENGTH: '숫자의 길이를 다시 확인해주세요. 게임 종료',
  NOTUNIQUE: '중복된 숫자가 없도록 입력해주세요. 게임 종료',
  NUMBER_RANGE: '1에서 9사이의 숫자만 입력해주세요. 게임 종료',
  RESTART_RANGE: '1 또는 2를 입력해주세요. 게임 종료',
};

module.exports = { RESULT, END_OPTION, MESSAGE, ERROR };
