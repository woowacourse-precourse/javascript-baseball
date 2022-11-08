const RANGE = {
  LENGTH: 3
};

const NEW_GAME_CONSTANT = {
  RESTART: 1,
  FINISH: 2
};

const GAME_MESSAGE = {
  INIT_MESSAGE: '숫자 야구 게임을 시작합니다.',
  USER_INPUT: '숫자를 입력해주세요 : ',
  GAME_FINISHED: `${RANGE.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  NEW_GAME: `게임을 새로 시작하려면 ${NEW_GAME_CONSTANT.RESTART}, 종료하려면 ${NEW_GAME_CONSTANT.FINISH}를 입력하세요.`
};

const ERROR_MESSAGE = {
  USER_INPUT_ERROR: '올바르지 않은 입력입니다.'
};

const RESULT = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱'
};

module.exports = { RANGE, NEW_GAME_CONSTANT, GAME_MESSAGE, ERROR_MESSAGE, RESULT };
