const { Random, Console } = require('@woowacourse/mission-utils');
const Verify = require('./Verify');
const { MESSAGE, STATE, NUMBER } = require('./Const');

class Game {
  constructor() {
    this.verify = new Verify();
  }

  start() {
    this.state = STATE.DEFAULT;
    this.setAnswer();
    this.interaction();
  }

  setAnswer() {
    let answer = [];

    while (answer.length < NUMBER.COUNT) {
      const number = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    this.answer = answer;
  }

  interaction() {
    const { verify } = this;

    Console.readLine(MESSAGE.READ_INPUT, (string) => {
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
      this.state = STATE.END;
    }
    this.count = count;
  }

  setHint() {
    const { count } = this;
    let hint = '';

    if (count.ball > 0) {
      hint = `${count.ball}${MESSAGE.BALL}`;
    }
    if (count.strike > 0) {
      hint += ` ${count.strike}${MESSAGE.STRIKE}`;
    }
    if (hint === '') {
      hint = MESSAGE.NOTHING;
    }
    this.hint = hint.trimStart();
  }

  checkState() {
    const { state } = this;

    switch (state) {
      case STATE.END: {
        this.readState();
        break;
      }
      case STATE.RESTART: {
        this.start();
        break;
      }
      case STATE.EXIT: {
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

    Console.print(MESSAGE.GAME_END);
    Console.readLine(MESSAGE.READ_STATE, (string) => {
      this.state = Number(string);
      verify.state(this.state);
      this.checkState();
    });
  }
}

module.exports = Game;
