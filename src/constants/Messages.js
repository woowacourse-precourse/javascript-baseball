const Messages = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  RESULT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_OR_EXIT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  GAME_OVER: '숫자 야구 게임을 종료합니다.',

  ERROR: {
    INVALID_BALL_NUMBER: '3자리 숫자를 중복없이 입력해주세요.',
    INVALID_SELECT_NUMBER: '1 혹은 2만 입력해주세요.',
  },
});

module.exports = Messages;
