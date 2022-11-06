const { Random, Console } = require('@woowacourse/mission-utils');
const { MESSAGE, STATE, NUMBER, REG_EXP } = require('./Const');
const verify = require('./Verify');

class Game {
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
    Console.readLine(MESSAGE.READ_NUMBER, (input) => {
      verify(REG_EXP.NUMBER, input);
      this.userInput = Array.from(input, Number);
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
    Console.print(MESSAGE.GAME_END);
    Console.readLine(MESSAGE.READ_STATE, (input) => {
      verify(REG_EXP.STATE, input);
      this.state = Number(input);
      this.checkState();
    });
  }
}

module.exports = Game;
