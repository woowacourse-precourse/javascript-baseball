const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.threeDigitsAnswer = [];
  }

  getThreeDigitsAnswer() {
    while (this.threeDigitsAnswer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.threeDigitsAnswer.includes(randomNumber)) {
        this.threeDigitsAnswer.push(randomNumber);
      }
    }
  }

  init() {
    this.getThreeDigitsAnswer();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  handleUserInputException(userInput) {
    const removeNaN = userInput.replace(/[^0-9]/g, '');
    const removeDuplicates = [...new Set(removeNaN.split(''))];

    if (removeNaN.length !== 3) {
      throw new Error('3자리 숫자를 입력해주세요');
    }

    for (const num of removeNaN) {
      if (Number(num) <= 0) {
        throw new Error('1에서 9 사이의 숫자를 입력해주세요');
      }
    }

    if (removeDuplicates.length !== 3) {
      throw new Error('각 자리에 중복되지 않은 숫자를 입력해주세요');
    }
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (expectedAnswer) => {
      try {
        this.handleUserInputException(expectedAnswer);
      } catch (e) {
        Console.print(e.message);
        Console.close();
      }
    });
  }

  play() {
    this.init();
    this.getUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
