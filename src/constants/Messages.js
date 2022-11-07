const Messages = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  RESULT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_OR_EXIT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  GAME_OVER: '숫자 야구 게임을 종료합니다.',

  ERROR: {
    NUMBER_RANGE: '3자리 숫자만 입력 가능합니다.',
    CHOOSE_RANGE: '1 혹은 2만 입력 가능합니다.',
  },
});

module.exports = Messages;
