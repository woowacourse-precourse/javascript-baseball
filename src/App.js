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

  start() {
    Console.readLine(MESSAGE.INPUT, (answer) => {
      this.user.save(answer);
      this.clear();
      this.process();
      this.print();
      if (this.result[RESULT.STRIKE] === 3) {
        this.computer.print(MESSAGE.SUCCESS);
        this.reStart();
      } else {
        this.start();
      }
    });
  }

  end() {
    Console.close();
  }

  reStart() {
    Console.readLine(MESSAGE.RESTART_OR_END, (answer) => {
      this.computer.print(answer);
      if (answer === USER_CHOICE.RESTART) {
        this.computer.saveRandom();
        this.start();
      }
      if (answer === USER_CHOICE.END) {
        this.end();
      }
    });
  }

  play() {}
}

module.exports = App;
