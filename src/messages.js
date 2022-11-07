/**
 * 프로그램 실행 중 출력되는 메세지 모음
 */
const Messages = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  INPUT_YOUR_GONG: '숫자를 입력하세요 : ',
  GONG_INVALID_FORMAT: '서로 다른 3개의 숫자를 입력해야합니다.',
  GUESS_GONG_RESULT_BALL: '볼',
  GUESS_GONG_RESULT_STRIKE: '스트라이크',
  GUESS_GONG_RESULT_NOTHING: '낫싱',
  GUESS_GONG_RESULT_SUCCESS: '3개의 숫자를 모두 맞혔습니다! 게임 종료',
});

module.exports = Messages;
