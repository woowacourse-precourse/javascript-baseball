const { Console, Random } = require('@woowacourse/mission-utils');

const VALID_INPUT_REGEX = /^[1-9]{3}$/;

class App {
  computer;
  isGameOver;

  constructor() {
    this.computer = this.generateRandomNumbers();
    this.isGameOver = false;
  }

  generateRandomNumbers() {
    const numberSet = new Set();

    while (numberSet.size !== 3) {
      numberSet.add(Random.pickNumberInRange(1, 9));
    }

    return [...numberSet];
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      this.inputAnswer();
    } catch (err) {
      this.exit();
      throw err;
    }
  }

  inputAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (this.isInvalidInput(answer)) {
        throw new Error('잘못된 입력입니다. 게임 종료');
      }

      this.printHint(answer);

      if (this.isGameOver) {
        this.gameOver();
        return;
      }

      this.inputAnswer();
    });
  }

  printHint(answer) {
    Console.print(this.getHint(this.computer, answer));
  }

  getHint(computerNumbers, answer) {
    const [strikeCount, ballCount] = this.getBallCounts(
      computerNumbers,
      answer,
    );
    const hintType = this.getHintType(strikeCount, ballCount);

    if (strikeCount === 3) {
      this.isGameOver = true;
    }

    return {
      NOTHING: '낫싱',
      ONLY_BALLS: `${ballCount}볼`,
      ONLY_STRIKES: `${strikeCount}스트라이크`,
      DEFAULT: `${ballCount}볼 ${strikeCount}스트라이크`,
    }[hintType];
  }

  getBallCounts(computerNumbers, answer) {
    const userNumbers = answer
      .split('')
      .map(userNumber => parseInt(userNumber, 10));

    return userNumbers.reduce(
      (prevBallCounts, userNumber, idx) => {
        const [strikeCount, ballCount] = prevBallCounts;

        if (this.isStrike(computerNumbers[idx], userNumber)) {
          return [strikeCount + 1, ballCount];
        }

        if (this.isBall(computerNumbers, userNumber)) {
          return [strikeCount, ballCount + 1];
        }

        return [strikeCount, ballCount];
      },
      [0, 0],
    );
  }

  isStrike(computerNumber, userNumber) {
    return computerNumber === userNumber;
  }

  isBall(computerNumbers, userNumber) {
    return computerNumbers.includes(userNumber);
  }

  getHintType(strikeCount, ballCount) {
    switch (true) {
      case strikeCount === 0 && ballCount === 0:
        return 'NOTHING';
      case strikeCount === 0:
        return 'ONLY_BALLS';
      case ballCount === 0:
        return 'ONLY_STRIKES';
      default:
        return 'DEFAULT';
    }
  }

  gameOver() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.inputGameMenuCode();
  }

  exit() {
    Console.close();
  }

  isInvalidInput(inputValue) {
    return !VALID_INPUT_REGEX.test(inputValue);
  }
}

new App().play();

module.exports = App;
