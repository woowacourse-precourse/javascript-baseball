const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, HINT, PLAY_STATUS } = require("./constants");
const { Input, Error } = require("./utils");

class App {
  constructor() {
    this.user = new Input();
    this.computer = new Input();
    this.hint = {};
  }

  play() {
    this.computer.print(MESSAGE.START);
    this.computer.saveRandom();
    this.playing();
  }

  playing() {
    Console.readLine(MESSAGE.INPUT, (answer) => {
      this.user.save(answer);
      this.clearHint();
      this.getHint();
      this.printHint();
      if (this.hint[HINT.STRIKE] === 3) {
        this.computer.print(MESSAGE.SUCCESS);
        this.reStartOREnd();
      } else {
        this.playing();
      }
    });
  }

  clearHint() {
    this.hint = {};
  }

  getHint() {
    const computer = this.computer.value;
    const user = this.user.value;

    for (let i = 0; i < computer.length; i++) {
      const isEqual = computer[i] === user[i];
      if (isEqual) this.updateHint(HINT.STRIKE);
      else {
        const exist = computer.indexOf(user[i]) > -1;
        if (exist) this.updateHint(HINT.BALL);
      }
    }
  }

  updateHint(name) {
    if (this.hint[name]) this.hint[name] += 1;
    else this.hint[name] = 1;
  }

  printHint() {
    const message = Object.entries(this.hint).reduce(
      (reduced, [key, value]) => {
        const str = `${value}${key} `;
        reduced = key === HINT.BALL ? str + reduced : reduced + str;
        return reduced;
      },
      ""
    );

    this.computer.print(message.length > 0 ? message : HINT.NOTHING);
  }

  reStartOREnd() {
    Console.readLine(MESSAGE.RESTART_OR_END, (answer) => {
      this.computer.print(answer);
      if (answer === PLAY_STATUS.RESTART) {
        this.computer.saveRandom();
        this.playing();
      } else if (answer === PLAY_STATUS.END) {
        this.end();
      } else Error.throw(MESSAGE.ERROR);
    });
  }

  end() {
    Console.close();
  }
}

module.exports = App;
