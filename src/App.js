const InputNumber = require("./components/InputNumber");
const MakeRandomNumbers = require("./components/MakeRandomNumbers");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }
  reset() {
    this.playGame();
  }
  exit() {
    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.close();
  }
  playGame() {
    let target = MakeRandomNumbers();
    InputNumber(target);
  }
}

const manageGame = () => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (answer) => {
      switch (answer) {
        case "1":
          app.reset();
          break;
        case "2":
          app.exit();
          break;
        default:
          manageGame();
      }
    }
  );
};

const app = new App();
app.play();

module.exports = App;
exports.manageGame = manageGame;
