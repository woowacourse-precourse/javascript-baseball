class GameMessage {
  static WELCOME_MESSAGE = '숫자 야구 게임을 시작합니다.';
  static QUESTION_MESSAGE = '숫자를 입력해주세요. : ';
  static WRONG_INPUT_ERROR_MESSAGE = '잘못된 값을 입력하셨습니다.';
  static END_GAME_MESSAGE =
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
  static RESTART_INPUT = '1';
  static GAMEOVER_INPUT = '2';
  static GAMEOVER_MESSAGE = '게임 종료';
}

module.exports = GameMessage;
