import Console from '../utils/Console.js';

class InputView {
  question = {
    answerMessage: '숫자를 입력해주세요 : ',
    choiceMessage: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    currentMessage: '',
  };

  setCurrentQuestionMessage(message) {
    this.question.currentMessage = message;
  }

  startQuiz(answerFunc) {
    Console.readline(this.question.currentMessage, answerFunc);
  }

  closeConsole() {
    Console.close();
  }
}

export default InputView;
