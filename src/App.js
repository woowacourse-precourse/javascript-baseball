const { Console } = require("@woowacourse/mission-utils");
const {
  makeBallCountString,
  getRandomThreeNumber,
  checkRestartInputValidation,
  checkBallInputValidation,
} = require("./libs");

const WELCOME_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INNIG_END_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_MESSAGE =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const GAMEOVER = "2";
const OUT = "3스트라이크";

class App {
  constructor() {
    this.inning = this.inning.bind(this);
    this.play = this.play.bind(this);
    this.computer;
  }
  askRestart() {
    Console.readLine(RESTART_MESSAGE, (input) => {
      checkRestartInputValidation(input);
      if (input === GAMEOVER) return Console.close();
      this.computer = getRandomThreeNumber();
      this.inning();
    });
  }
  checkBallCount(number) {
    checkBallInputValidation(number);
    const ballCount = makeBallCountString(this.computer, number);
    Console.print(ballCount);
    if (ballCount === OUT) {
      Console.print(INNIG_END_MESSAGE);
      this.askRestart();
    }
  }
  inning() {
    Console.readLine(INPUT_MESSAGE, (input) => {
      if (input.length > 3) throw new Error();
      this.checkBallCount(input);
      this.inning();
    });
  }
  play() {
    Console.print(WELCOME_MESSAGE);
    this.computer = getRandomThreeNumber();
    this.inning();
  }
}

const app = new App();
app.play();

module.exports = App;
