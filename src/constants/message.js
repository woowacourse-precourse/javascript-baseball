const MESSAGE = {
  GAME: {
    START: '숫자 야구 게임을 시작합니다.',
    WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    INPUT: '숫자를 입력해주세요 : ',
    FINISH: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    OVER: '숫자 야구 게임을 종료합니다.',
  },

  ERROR: {
    SYSTEM: '시스템 오류로 인해 게임을 종료합니다.',
    WRONG_VALUE: '잘못된 값을 입력했습니다. 게임을 종료합니다.',
  },
};

module.exports = Object.freeze(MESSAGE);
