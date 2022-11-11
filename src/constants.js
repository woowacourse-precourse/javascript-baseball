const gameInformation = {
  START: '숫자 야구 게임을 시작합니다.',
  GET_INPUT: '숫자를 입력해주세요 : ',
  END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  CHECK_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
}

const gameResult = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NONE: '낫싱',
}

const gameError = {
  INVALID_INPUT: '잘못된 입력입니다. 프로그램을 종료합니다.',
}

module.exports = {
  gameInformation,
  gameResult,
  gameError,
}
