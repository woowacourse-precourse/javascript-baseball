const InputNumber = require("./components/InputNumber");
const MakeRandomNumbers = require("./components/MakeRandomNumbers");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let target = MakeRandomNumbers();
    InputNumber(target);
  }
  reset() {
    let target = MakeRandomNumbers();
    InputNumber(target);
  }
  exit() {
    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.close();
  }
}

const manageGame = () => {
  MissionUtils.Console.readLine(
    "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (answer) => {
      if (answer == 1) {
        app.reset();
      }
      if (answer == 2) {
        app.exit();
      }
    }
  );
};

/** test용 코드 */
const app = new App();
app.play();

module.exports = App;
exports.manageGame = manageGame;
