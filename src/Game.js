const { Random, Console } = require('@woowacourse/mission-utils');
const Verify = require('./Verify');

class Game {
  constructor() {
    this.verify = new Verify();
  }

  start() {
    this.state = -1;
    this.setAnswer();
    this.interaction();
  }

  setAnswer() {
    let answer = [];

    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    this.answer = answer;
  }

  interaction() {
    const { verify } = this;

    Console.readLine('숫자를 입력해 주세요 : ', (string) => {
      this.userInput = Array.from(string, Number);
      verify.userInput(this.userInput);
      this.setCount();
      this.setHint();
      Console.print(this.hint);
      this.checkState();
    });
  }

  setCount() {
    const { answer, userInput } = this;
    let count = {
      ball: 0,
      strike: 0,
    };

    userInput.forEach((number, index) => {
      const findIndex = answer.findIndex((element) => element === number);

      if (findIndex === index) {
        count.strike += 1;
      } else if (findIndex !== -1) {
        count.ball += 1;
      }
    });
    if (count.strike === 3) {
      this.state = 0;
    }
    this.count = count;
  }

  setHint() {
    const { count } = this;
    let hint = '';

    if (count.ball > 0) {
      hint = `${count.ball}볼`;
    }
    if (count.strike > 0) {
      hint += ` ${count.strike}스트라이크`;
    }
    if (hint === '') {
      hint = '낫싱';
    }
    this.hint = hint.trimStart();
  }

  checkState() {
    const { state } = this;

    switch (state) {
      case 0: {
        this.readState();
        break;
      }
      case 1: {
        this.start();
        break;
      }
      case 2: {
        Console.close();
        break;
      }
      default: {
        this.interaction();
      }
    }
  }

  readState() {
    const { verify } = this;

    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (string) => {
        this.state = Number(string);
        verify.state(this.state);
        this.checkState();
      }
    );
  }
}

module.exports = Game;
