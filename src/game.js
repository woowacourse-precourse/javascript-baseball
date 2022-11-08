const {
  MESSAGE,
  RANDOM_NUMBER,
  END_INPUT,
  SCORE,
  ERROR,
} = require("./constants");
const { Console, Random } = require("@woowacourse/mission-utils");
class Game {
  constructor() {
    this.answerNumber;
    this.playBoolean;
  }
  print(message) {
    return Console.print(message);
  }
  play() {
    this.go();
    this.getCount(this.answerNumber);
  }
  go() {
    this.print(MESSAGE.START);
    this.answerNumber = this.createRandomNumber();
  }
  createRandomNumber() {
    let randomNumberArr = [];
    while (randomNumberArr.length < RANDOM_NUMBER.LENGTH) {
      const N = Random.pickNumberInRange(
        RANDOM_NUMBER.MIN,
        RANDOM_NUMBER.MAX
      );
      if (!randomNumberArr.includes(N)) {
        randomNumberArr.push(N);
      }
    }
    return randomNumberArr;
  }
  isValidInput(input) {
    const checkDupInput = [...new Set(input)].length; // 중복되지 않은 숫자의 갯수
    if (checkDupInput !== 3) {
      throw new Error(ERROR.INPUT_THREE_NUMBER);
    }
    if (!RANDOM_NUMBER.RANGE.test(input)) {
      throw new Error(ERROR.INPUT_THREE_NUMBER);
    }
    if (input.length !== 3) {
      // 숫자가 3개가 아닌 경우
      throw new Error(ERROR.INPUT_THREE_NUMBER);
    }
    return;
  }

  getCount(answer) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (input) => {
      this.isValidInput(input); // 유효성 검사
      const inputNumber = [...input].map(Number);
      const { ball, strike } = this.countPitch(
        // 볼, 스트라이크 체크
        inputNumber,
        this.answerNumber
      );

      this.printScore(ball, strike); // 현재 스코어 출력
      if (strike !== 3) {
        return this.getCount(answer);
      } else {
        this.print(MESSAGE.SUCCESS);
        this.playAgain();
        // 재시작 구문
      }
    });
    return;
  }
  countPitch(inputNumber, answerNumber) {
    let ball = 0;
    let strike = 0;
    inputNumber.forEach((number, index) => {
      if (number === answerNumber[index]) {
        strike++;
      } else if (answerNumber.includes(number)) {
        ball++;
      }
    });
    return { ball, strike };
  }
  printScore(ball, strike) {
    let output;
    if (ball === 0 && strike === 0) {
      output = SCORE.NOTHING;
    } else if (ball > 0 && strike > 0) {
      output = `${ball}${SCORE.BALL} ${strike}${SCORE.STRIKE}`;
    } else if (ball > 0) {
      output = `${ball}${SCORE.BALL}`;
    } else if (strike > 0) {
      output = `${strike}${SCORE.STRIKE}`;
    }
    return Console.print(output);
  }
  playAgain() {
    Console.readLine(MESSAGE.RESTART, (input) => {
      const inputNumber = Number(input);
      if (inputNumber === END_INPUT.START) {
        this.playBoolean = true;
        this.play();
        return;
      }
      if (inputNumber === END_INPUT.END) {
        return Console.close();
      }
      throw new Error(ERROR.INPUT_ONE_OR_TWO);
    });
    return;
  }
}

module.exports = Game;
