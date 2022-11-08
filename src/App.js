const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.inputCallback = this.inputCallback.bind(this);
  }

  generateRandomNumbers() {
    this.answerArray = [];
    while (this.answerArray.length < 3) {
      const inputString = Random.pickNumberInRange(1, 9);

      if (!this.answerArray.includes(inputString)) {
        this.answerArray.push(inputString);
      }
    }
  }

  readUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', this.inputCallback);
  }

  convertToNumberArray(inputString) {
    return inputString.split('').map((item) => Number(item));
  }

  arrayLengthCheck(inputArray) {
    if (inputArray.length !== 3) {
      throw new Error('❗️ 숫자 3개를 입력하세요. ❗️');
    }
  }

  arrayValueRangeCheck(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      if (!inputArray[i] > 0 && inputArray[i] < 10) {
        throw new Error('❗️ 1부터 9사이의 숫자를 입력하세요. ❗️');
      }
    }
  }

  arrayValueDuplicateCheck(inputArray) {
    const numberSet = new Set(inputArray);
    if (numberSet.size !== 3) {
      throw new Error('❗️ 중복되지 않은 숫자를 입력하세요. ❗️');
    }
  }

  countBall(inputArray) {
    let ballNumber = 0;

    for (let i = 0; i < inputArray.length; i++) {
      const matchResult = this.answerArray.some(
        (answer, index) => answer === inputArray[i] && index !== i
      );

      if (matchResult) {
        ballNumber++;
      }
    }

    return ballNumber;
  }

  countStrike(inputArray) {
    let strikesNumber = 0;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === this.answerArray[i]) {
        strikesNumber++;
      }
    }
    return strikesNumber;
  }

  printResult(numberBall, numberStrike) {
    let resultString;

    const ballString = numberBall ? `${numberBall}볼` : '';
    const strikeString = numberStrike ? `${numberStrike}스트라이크` : '';

    if (ballString || strikeString) {
      const separator = ballString && strikeString ? ' ' : '';
      resultString = ballString + separator + strikeString;
    } else {
      resultString = '낫싱';
    }
    Console.print(resultString);
    if (numberStrike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
    return resultString;
  }

  confirmRetry() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (inputString) => {
        if (inputString === '1') {
          this.play();
        } else if (inputString === '2') {
          Console.close();
        } else {
          throw new Error('❗️ 잘못된 숫자를 입력하여 게임이 종료됩니다. ❗️');
        }
      }
    );
  }

  processNextStep(numberStrike) {
    if (numberStrike === 3) {
      this.confirmRetry();
    } else {
      this.readUserInput();
    }
  }

  inputCallback() {}

  play() {}
}

module.exports = App;
