class Messages {
  static PLAY = '숫자 야구 게임을 시작합니다.';

  static QUERY = '숫자를 입력해주세요 : ';

  static GAME_OVER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

  static REPLAY = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';

  static ERROR_WHILE_GUESS = '--- *서로다른 세자리 자연수를 입력해주세요 ---';

  static ERROR_WHILE_REPLAY = '--- *1 또는 2를 입력해주세요  ---';

  static RESULT_MESSAGE(strike, ball) {
    if (ball === 0 && strike === 0) {
      return '낫싱';
    }
    if (ball === 0 && strike > 0) {
      return `${strike}스트라이크`;
    }
    if (ball > 0 && strike === 0) {
      return `${ball}볼`;
    }
    if (ball > 0 && strike > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
    throw new Error('비정상적인 결과 입니다.');
  }
}

module.exports = Messages;