const { Console } = require('@woowacourse/mission-utils');
const computer = require('./Answer');

class App {
  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.readLine();
  }

  print(msg) {
    Console.print(msg);
  }

  readLine() {
    Console.readLine(`숫자를 입력해주세요 : `, (answer) => {
      this.print(`입력한 숫자: ${answer}`);
    });
  }

  close() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
