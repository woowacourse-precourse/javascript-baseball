const { Random, Console } = require('@woowacourse/mission-utils');
const { handleUserInputException } = require('./exception');

class App {
  constructor() {
    this.threeDigitsAnswer = null;
    console.log('숫자 야구 게임을 시작합니다.');
  }

  getThreeDigitsAnswer() {
    this.threeDigitsAnswer = [];

    while (this.threeDigitsAnswer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.threeDigitsAnswer.includes(randomNumber)) {
        this.threeDigitsAnswer.push(randomNumber);
      }
    }
    console.log(this.threeDigitsAnswer);
  }

  init() {
    this.getThreeDigitsAnswer();
  }

  getExpectedAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', (expectedAnswer) => {
      handleUserInputException(expectedAnswer, 'getExpectedAnswer');
      const userInput = expectedAnswer.split('').map(Number);
      this.checkAnswer(userInput);
    });
  }

  getRestart() {
    console.log('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (isRestart) => {
      handleUserInputException(isRestart, 'getRestart');

      if (isRestart === '1') {
        this.play();
      } else {
        Console.print('게임 종료');
        Console.close();
      }
    });
  }

  getUserInput(inputType) {
    if (inputType === 'getExpectedAnswer') {
      this.getExpectedAnswer();
    }

    if (inputType === 'getRestart') {
      this.getRestart();
    }
  }

  getStrike(userInput) {
    let strike = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === this.threeDigitsAnswer[i]) {
        strike += 1;
      }
    }

    return strike;
  }

  getBall(userInput) {
    let ball = 0;

    userInput.forEach((num, idx) => {
      const computerIndex = this.threeDigitsAnswer.indexOf(num);
      if (computerIndex !== -1 && computerIndex !== idx) {
        ball += 1;
      }
    });

    return ball;
  }

  printHint(userInput) {
    const strike = this.getStrike(userInput);
    const ball = this.getBall(userInput);

    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else if (strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
    } else if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  checkAnswer(userInput) {
    let matchCnt = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === this.threeDigitsAnswer[i]) {
        matchCnt += 1;
      }
    }

    this.printHint(userInput);
    if (matchCnt === 3) {
      console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.getUserInput('getRestart');
    } else {
      this.getUserInput('getExpectedAnswer');
    }
  }

  play() {
    this.init();
    try {
      this.getUserInput('getExpectedAnswer');
    } catch (e) {
      throw e;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
