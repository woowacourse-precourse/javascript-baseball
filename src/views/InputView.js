import Console from '../utils/Console.js';

class InputView {
  static question = {
    answerMessage: '숫자를 입력해주세요 : ',
    choiceMessage: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    currentMessage: '',
  };

  static receiveUserAnswer() {
    Console.readline('숫자를 입력해주세요 : ', answer => {});
  }
}

export default InputView;
