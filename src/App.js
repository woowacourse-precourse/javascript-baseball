const {Console} = require("@woowacourse/mission-utils");
const Computer = require("./Computer")

class App {
  constructor () {
    this.computer = new Computer;
  }

  play() {
    this.computer.setNumbers(3);
    Console.print(this.computer.getNumbers())
    Console.print('숫자 야구 게임을 시작합니다.')
    Console.close();    
  }
}

const app = new App();
app.play()


module.exports = App;

