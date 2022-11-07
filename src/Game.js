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

  /**
   * 커맨드를 실행한다.
   * @public
   * @method
   * @return {} void
   * @description 게임을 시작한다. 클래스 외부에서 호출한다.
   */
  playCommand () {
    this.computer.setNumber();
    this.askNumber();
  }

  askNumber () {
    this.io.input(Message.PLEASE_INPUT_NUMBER, this.attempt.bind(this));
  }

  attempt (input) {
    this.user.setNumber(input);
    const result = this.compare(this.computer.getNumber(), this.user.getNumber());
    this.outputResult(result);
    if (this.isEnd(result)) {
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
  compare (computerNumber, input) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === input[i]) {
        strike++;
      } else if (computerNumber.includes(input[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  isEnd ({ strike }) {
    return strike === 3;
  }

  retry () {
    this.askNumber();
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
