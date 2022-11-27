const GAME_MESSAGE = Object.freeze({
  inputValue: '숫자를 입력해주세요 : ',
  start: '숫자 야구 게임을 시작합니다.',
  clear: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  error_invalid_input: '3자리의 중복되지 않는 숫자로 입력해주세요',
  error_invalid_restart_input: '1 또는 2를 입력해주세요',
});

module.exports = GAME_MESSAGE;
