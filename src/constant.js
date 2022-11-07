const ERROR_MESSAGE = Object.freeze({
  OUT_OF_RANGE: '범위에 벗어난 숫자입니다',
  DIFFERENT_NUMBERS: '서로다른 3자리 숫자를 입력해주세요',
  ONLY_NUMBER: '한 개의 숫자만 입력해주세요',
});

const OUTPUT_MESSAGE = Object.freeze({
  ENTER_NUMBER: '숫자를 입력하세요 : ',
  CORRECT_ANSWER: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
  RESTART_ENDGAME_ENTER_NUMBER: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n',
  START_GAME: '게임을 시작합니다',
});

const GENERATE_RANGE = Object.freeze({
  MAX_SIZE: 3,
  MINIMUM_VALUE: 1,
  MAXIMUM_VALUE: 9,
});

module.exports = {
  ERROR_MESSAGE,
  OUTPUT_MESSAGE,
  GENERATE_RANGE,
};
