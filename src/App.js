const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  play() {
    this.printStartGame();
  }

  printStartGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  createRandomNumber() {
    const randomNumberList = [];

    while (randomNumberList.length < 3) {
      const collectRandomNumber = Random.pickNumberInRange(1, 9);
      !randomNumberList.includes(collectRandomNumber) &&
        randomNumberList.push(collectRandomNumber);
    }

    return randomNumberList;
  }

  requireInputRandomNumber(randomNumber) {
    Console.print("숫자를 입력해주세요 : ");
    Console.readLine(" ", (answer) => {
      this.isRandomInputErrorCase(answer);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
