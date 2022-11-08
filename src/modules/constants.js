const GAME = {
  LENGTH: 3,
  START: 1,
  LAST: 9,
  RESTART: '1',
  QUIT: '2'
}

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  NOTHING: '낫싱',
  GAME_QUESTION: '숫자를 입력해주세요 : ',
  BALL: '볼',
  STRIKE: '스트라이크',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  INPUT_INVALID: '잘못된 값을 입력했습니다!',
  END_QUESTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
}

module.exports = { GAME, MESSAGE };