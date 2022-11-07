const MissionUtils = require('@woowacourse/mission-utils');

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.computerNum = [];
    this.userInput = '';
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    Console.print('게임을 시작합니다.');
    this.createComputerNum();
    this.start();
  }

  start() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (!this.isValidUserInput(input)) {
        this.isError();
      }
      Console.print(`숫자를 입력해주세요 : ${this.userInput}`);
      this.strike = 0;
      this.ball = 0;
      this.getAnswer();

      if (this.strike !== 3) {
        return this.start();
      }
      return this.askUserToRestart();
    });
  }

  isValidUserInput(input) {
    input.replace(/ /g, '');
    if (input.length !== 3 || Number.isNaN(+input)) {
      return false;
    }
    this.userInput = input;
    return true;
  }

  createComputerNum() {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 3) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNum = [...randomNumberSet].join('');
    return this.computerNum;
  }

  isStrike() {
    const { computerNum, userInput } = this;
    computerNum.split('').forEach((num, idx) => {
      if (computerNum[idx] === userInput[idx]) {
        this.strike += 1;
      }
    });
    return this.strike || 0;
  }

  isBall() {
    const { computerNum, userInput } = this;
    computerNum.split('').forEach((num, idx) => {
      if (
        computerNum[idx] !== userInput[idx] &&
        userInput.includes(computerNum[idx])
      ) {
        this.ball += 1;
      }
    });
    return this.ball || 0;
  }

  getAnswer() {
    this.isStrike();
    this.isBall();
    const strikeText = this.strike ? `${this.strike}스트라이크` : '';
    const ballText = this.ball ? `${this.ball}볼` : '';
    if (this.strike || this.ball) {
      Console.print(`${ballText} ${strikeText}`.trim());
      return;
    }
    Console.print('낫싱');
  }

  isRestart() {
    this.play();
  }

  isExit() {
    Console.close();
  }

  isError() {
    throw new Error('잘못된 입력입니다.');
  }

  askUserToRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',
      (input) => {
        if (input === '1') {
          Console.print(input);
          this.isRestart();
          return;
        }
        if (input === '2') {
          this.isExit();
        } else {
          this.isError();
        }
      },
    );
  }
}

module.exports = App;
