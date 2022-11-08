const Message = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  INPUT: '숫자를 입력해주세요 : ',
  START: '숫자 야구 게임을 시작합니다.',
  RESTART: '1',
  EXIT: '2',
  MAX_STRIKE: 3,

  selectEnd() {
    return `게임을 새로 시작하려면 ${this.RESTART}, 종료하려면 ${this.EXIT}를 입력하세요.\n`;
  },

  getCorrect() {
    return `${this.MAX_STRIKE}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
  },
};

module.exports = Message;
