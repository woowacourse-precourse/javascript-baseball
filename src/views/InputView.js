const Console = require('../utils/Console');

class InputView {
  static question = {
    answerMessage: '숫자를 입력해주세요 : ',
    choiceMessage: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  };

  static startQuiz(question, answerFunc) {
    Console.readline(question, answerFunc);
  }

  static closeConsole() {
    Console.close();
  }
}

module.exports = InputView;
