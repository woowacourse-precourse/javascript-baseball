const SYSTEM_MESSAGE = Object.freeze({
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  END_MESSAGE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_MESSAGE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n',
  GET_NUMBER_MESSAGE: '숫자를 입력해주세요 : ',
});

const GAME_MESSAGE = Object.freeze({
  NOTHING_MESSAGE: '낫싱',
  STRIKE_MESSAGE: '스트라이크',
  BALL_MESSAGE: '볼',
  CORRECT_MESSAGE: '3스트라이크',
});

module.exports = SYSTEM_MESSAGE;
module.exports = GAME_MESSAGE;
