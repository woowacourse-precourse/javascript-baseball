const RESULT = {
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
}

const MESSAGES = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다!',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  END: '게임 종료',
}

const NUMBERS = {
  RANDOM_MIN: 1,
  RANDOM_MAX: 9,
  REQUIRED_LENGHT: 3,
  RESTART_GAME: 1,
  END_GAME: 2,
  SUCCESS_COUNT: 3,
}

module.exports = {
  RESULT,
  MESSAGES,
  NUMBERS,
}
