const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readInputNum(callback) {
    Console.readLine('숫자를 입력해주세요 : ', callback);
  },

  readRetry(callback) {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      callback
    );
  },
};

module.exports = InputView;
