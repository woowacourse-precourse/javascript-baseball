const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, RESULT, USER_CHOICE } = require("./constants");
const { Input } = require("./utils");

class App {
  constructor() {
    this.user = new Input();
    this.computer = new Input();
    this.result = {};
  }

  clear() {
    this.result = {};
  }

  update(kind) {
    if (this.result[kind]) this.result[kind] += 1;
    else this.result[kind] = 1;
  }

  process() {
    const computer = this.computer.value;
    const user = this.user.value;

    for (let i = 0; i < computer.length; i++) {
      if (computer[i] === user[i]) this.update(RESULT.STRIKE);
      else {
        const exist = computer.indexOf(user[i]) > -1;
        if (exist) this.update(RESULT.BALL);
      }
    }
  }

  print() {
    const message = Object.entries(this.result).reduce(
      (reduced, [key, value]) => {
        const str = `${value}${key} `;
        reduced = key === RESULT.BALL ? str + reduced : reduced + str;
        return reduced;
      },
      ""
    );

    this.computer.print(message.length > 0 ? message : RESULT.NOTHING);
  }

  play() {}
}

module.exports = App;
