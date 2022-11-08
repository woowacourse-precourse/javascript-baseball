const NUM_THREE = 3;

const RESULT = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  CORRECT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  ENDING: '게임을 완전히 종료합니다.',
};

const RESTART_INPUT = {
  RESTART: '1',
};

const ERROR = {
  ONLY_NUMBER: '숫자만 입력할 수 있습니다.',
  LENGTH_IS_THREE: '세자리 수를 입력해주세요.',
  NOT_UNIQUE: '각 자리수가 중복되지 않게 입력해주세요.',
  ONLY_ONE_OR_TWO: '1 또는 2를 입력해주세요.',
  ERROR_ENDING: ' 에러로 인해 게임을 종료합니다.',
};

module.exports = { NUM_THREE, RESULT, RESTART_INPUT, MESSAGE, ERROR };
