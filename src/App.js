const {Console} = require("@woowacourse/mission-utils");
const Computer = require("./Computer")
const User = require("./User")

class App {
  constructor () {
    this.computer = new Computer;
    this.user = new User;
  }

  play() {
    Console.print(this.computer.getNumbers())
    // const computerNumbers = this.computer.getNumbers();
    Console.print('숫자 야구 게임을 시작합니다.');
    const userNumbers = this.user.getNumbers();

    // Console.close();
  }
}

const app = new App();
app.play()


module.exports = App;

