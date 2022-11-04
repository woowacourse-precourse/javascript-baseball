const MAX_LENGTH = 3;
const START_NUM = 1;
const END_NUM = 9;

const GAME_RESULT = {
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
};

const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const INPUT_MESSGAE = '숫자를 입력해주세요 : ';
const END_MESSAGE = `${MAX_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`;

module.exports = {
  MAX_LENGTH,
  START_NUM,
  END_NUM,
  GAME_RESULT,
  START_MESSAGE,
  END_MESSAGE,
  INPUT_MESSGAE,
};
