const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
  }

  setAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  readInput() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해 주세요 : ', (input) => {
        this.userInput = Array.from(input, Number);
        resolve();
      });
    });
  }

  setCount(answer, userInput) {
    this.count = {
      ball: 0,
      strike: 0,
    };
    userInput.forEach((number, index) => {
      const findIndex = answer.findIndex((element) => element === number);

      if (findIndex === index) {
        this.count.strike += 1;
      } else if (findIndex !== -1) {
        this.count.ball += 1;
      }
    });
  }

  setHint(count) {
    this.hint = '';
    if (count.ball > 0) {
      this.hint = `${count.ball}볼`;
    }
    if (count.strike > 0) {
      this.hint += ` ${count.strike}스트라이크`;
    }
    if (this.hint === '') {
      this.hint = '낫싱';
    }
    this.hint.trimStart();
  }

  async startGame() {
    this.setAnswer();
    do {
      await this.readInput();
      this.setCount(this.answer, this.userInput);
      this.setHint(this.count);
      MissionUtils.Console.print(this.hint);
    } while (this.count.strike !== 3);
  }

  readState() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
        (input) => {
          this.state = Number(input);
          resolve();
        }
      );
    });
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    do {
      await this.startGame();
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.readState();
    } while (this.state === 1);
    MissionUtils.Console.close();
  }
}

module.exports = App;
