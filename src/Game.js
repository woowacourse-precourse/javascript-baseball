const Io = require('./Io');
const Computer = require('./player/Computer.js');
const User = require('./player/User.js');
const Message = require('./Message');
const InValidInputError = require('./error/InValidInputError');

class Game {
  constructor () {
    this.io = Io;
    this.computer = new Computer();
    this.user = new User();
  }

  playCommand () {
    this.computer.setNumber();
    this.askNumber(this.attempt.bind(this));
  }

  askNumber (callback) {
    this.io.input(Message.PLEASE_INPUT_NUMBER, callback);
  }

  attempt (input) {
    this.user.setNumber(input);
    const result = Game.compare(this.computer.getNumber(), this.user.getNumber());
    this.outputResult(result);
    if (Game.isEnd(result)) {
      this.outputGameEnd();
      this.askReplay();
    } else {
      this.retry();
    }
  }

  outputResult ({ strike, ball }) {
    this.io.output(Message.gameResult({ strike, ball }));
  }

  outputGameEnd () {
    this.io.output(Message.GAME_END);
  }

  /**
   * - 두 숫자배열을 비교한다.
   * @param {[number, number, number]} computerNumber
   * @param {[number, number, number]} input
   * @return {{strike:number, ball:number}}
   */
  static compare (computerNumber, input) {
    let strike = 0;
    let ball = 0;
    computerNumber.forEach((number, index) => {
      if (number === input[index]) strike += 1;
      else if (input.includes(number)) ball += 1;
    });
    return { strike, ball };
  }

  static isEnd ({ strike }) {
    return strike === 3;
  }

  retry () {
    this.askNumber(this.attempt.bind(this));
  }

  askReplay () {
    this.io.input(Message.ASK_REPLAY, this.decideReplay.bind(this));
  }

  decideReplay (input) {
    if (Number(input) === Message.REPLAY) {
      this.replay();
      return;
    } if (Number(input) === Message.NO_REPLAY) {
      this.exit();
      return;
    }
    throw new InValidInputError();
  }

  replay () {
    this.playCommand();
  }

  exit () {
    this.io.close();
  }
}

module.exports = Game;
