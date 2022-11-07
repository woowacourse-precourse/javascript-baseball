
const GAME_ANNOUNCEMENT_MESSAGE = {
  GAME_START : '숫자 야구 게임을 시작합니다.',
  INPUT : '숫자를 입력해주세요.',
  GAME_OVER : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  REPLAY : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
}

const WRONG_INPUT_ALERT = {
  NOT_NUMBER : '숫자가 아닙니다.\n숫자만 입력해주세요.',
  NOT_POSITIVE : '양수가 아닙니다.\n양수 값을 입력해주세요.',
  NOT_THREE_DIGITS : '세자리 수가 아닙니다.\n세자리 수를 입력하세요.',
  NOT_UNIQUE_NUMBER : '중복되지 않은 세자리 수가 아닙니다.\n중복되지 않은 세자리 수를 입력해주세요.',
  INCLUDES_ZERO : '0을 포함하고 있습니다.\n1-9 사이의 값을 입력해주세요.',
  NOT_ONE_OR_TWO : '잘못된 입력입니다.\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
}

module.exports = {
  GAME_ANNOUNCEMENT_MESSAGE,
  WRONG_INPUT_ALERT,
};