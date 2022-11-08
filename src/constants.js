const PROGRESS_MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  INPUT_ANSWER: '숫자를 입력해주세요.',
  CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  INPUT_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  GAME_OVER: '게임 종료',
};

const ERROR_MESSAGE = {
  INPUT_THREE_NUMBER: '숫자 3개를 입력해주세요.',
  INPUT_TYPE_NUMBER: '숫자만 입력해주세요.',
  INPUT_RANGE_NUMBER: '각 자리에 1이상 9이하의 숫자를 입력해주세요.',
  INPUT_UNIQUE_NUMBER: '서로 다른 숫자를 입력해주세요.',
  INPUT_RESTART_NUMBER: '재시작은 1, 종료는 2를 입력해주세요.',
};

module.exports = {
  PROGRESS_MESSAGE,
  ERROR_MESSAGE,
}