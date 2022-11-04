const constant = {
  ANSWER: {
    LENGTH: 3,
    MIN: 1,
    MAX: 9,
  },

  GAME: {
    STRIKE: '스트라이크',
    BALL: '볼',
    NOTHING: '낫싱',
    RESTART: 1,
    EXIT: 2,
  },

  GAME_SENTENCE: {
    OPENING: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    CORRECT: `${ANSWER.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    ASK_MORE: `게임을 새로 시작하려면 ${GAME.RESTART}, 종료하려면 ${GAME.EXIT}를 입력하세요.`,
  },

  ERROR: {
    LENGTH: `${ANSWER.LENGTH}개로 입력해주세요.`,
    NAN: '숫자만 입력해주세요.',
    INVALID: `${ANSWER.MIN} ~ ${ANSWER.MAX}사이의 숫자만 입력해주세요.`,
    DUPLICATION: '중복된 숫자는 입력할 수 없습니다.',
  },
};

module.exports = constant;
