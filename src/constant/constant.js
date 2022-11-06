const NUMBER_LENGTH = 3;

const ERROR_MESSAGE = {
  length: '자릿수를 확인해주세요!',
  type: '숫자를 입력해주세요!',
  range: '입력 값의 범위를 확인해주세요!',
  duplication: '중복되지 않은 수를 입력해주세요!',
};

const GAME_MESSAGE = {
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  nothing: '낫싱',
  correct: `${NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

exports.NUMBER_LENGTH = NUMBER_LENGTH;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
exports.GAME_MESSAGE = GAME_MESSAGE;
