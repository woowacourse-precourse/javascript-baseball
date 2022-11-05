const { game, statusValidation } = require("./libs");
const { Console } = require("@woowacourse/mission-utils");
const makeBallCountString = require("./libs/makeBallCountString");
const getRandomThreeNumber = require("./libs/getRandomThreeNumber");

class App {
  constructor() {
    this.inning = this.inning.bind(this);
    this.play = this.play.bind(this);
    this.computer;
  }
  computerNumber() {
    return getRandomThreeNumber();
  }
  checkRestartInputValidation(input) {
    const RESTART = "1";
    const GAMEOVER = "2";
    if (!input === RESTART || !input === GAMEOVER)
      throw new Error("1 또는 2를 입력해야합니다.");
  }
  isNotNumber(number) {
    return !(number >= 1 && number <= 9);
  }
  checkBallInputValidation(input) {
    const inputArr = input.split("");
    if (input.length !== 3) throw new Error("3자리 수를 입력해야합니다.");
    if (inputArr.some(this.isNotNumber))
      throw new Error("숫자만 입력해야합니다.");
  }
  askRestart() {
    const GAMEOVER = "2";
    Console.readLine("다시 시작 1 종료 2 :  ", (input) => {
      this.checkRestartInputValidation(input);
      if (input === GAMEOVER) return Console.close();
      this.computer = getRandomThreeNumber();
      this.inning();
    });
  }
  checkBallCount(number) {
    this.checkBallInputValidation(number);
    const ballCount = makeBallCountString(this.computer, number);
    Console.print(ballCount);
    if (ballCount == "3스트라이크") {
      Console.print("게임 종료");
      this.askRestart();
    }
  }
  inning() {
    Console.readLine("되나?   ", (input) => {
      if (input.length > 3) throw new Error();
      this.checkBallCount(input);
      this.inning();
    });
  }
  play() {
    this.computer = this.computerNumber();
    this.inning();
  }
}

const app = new App();
app.play();

module.exports = App;
