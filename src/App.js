const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.askForNumbers();
  }

  makeRandomNumber() {
    const correctNumbers = new Set();
    while (correctNumbers.size < 3) {
      correctNumbers.add(Random.pickNumberInRange(1, 9));
    }
  }

  askForNumbers() {
    Console.readLine("숫자를 입력해주세요 : ", (receivedNumbers) => {
      // receivedNumbers의 유효성 검사하기
    });
  }
}

const app = new App();
app.play();

module.exports = App;
