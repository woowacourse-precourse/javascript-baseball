const { game, statusValidation } = require("./libs");
const { Console } = require("@woowacourse/mission-utils");
const makeBallCountString = require("./libs/makeBallCountString");
const getRandomThreeNumber = require("./libs/getRandomThreeNumber");

class App {
  RESTART = "1";
  GAMEOVER = "2";
  constructor() {
    this.iterator = this.iterator.bind(this);
    this.play = this.play.bind(this);
    this.computer;
  }
  computerNumber() {
    return getRandomThreeNumber();
  }
  checkRestartInputValidation(number) {
    if (!number === RESTART || !number === GAMEOVER)
      throw new Error("잘못 입력");
  }
  askRestart() {
    Console.readLine("다시 시작 1 종료 2 :  ", (res) => {
      this.checkRestartInputValidation(number);
      if (res === "2") return Console.close();
      this.computer = getRandomThreeNumber();
      this.iterator();
    });
  }
  iterator() {
    Console.readLine("되나?   ", (res) => {
      if (res.length > 3) throw new Error();
      const ballCount = makeBallCountString(this.computer, res);
      Console.print(ballCount);
      if (ballCount == "3스트라이크") {
        Console.print("게임 종료");
        this.askRestart();
      }
      this.iterator();
    });
  }
  play() {
    this.computer = this.computerNumber();
    this.iterator();
  }
}

const app = new App();
app.play();

module.exports = App;
