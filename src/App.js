const { Random, Console } = require('@woowacourse/mission-utils');

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

  getExpectedAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', (expectedAnswer) => {
      try {
        this.handleUserInputException(expectedAnswer);
        const userInput = expectedAnswer.split('').map(Number);
        this.checkAnswer(userInput);
      } catch (e) {
        throw e;
        // Console.print(e.message);
      }
    });
  }

  getRestart() {
    console.log('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (isRestart) => {
      if (isRestart === '1') {
        this.play();
      } else if (isRestart === '2') {
        Console.print('게임 종료');
        Console.close();
      } else {
        throw new Error('1 또는 2 중에 선택해주세요');
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
      console.log(e);
      throw e;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
