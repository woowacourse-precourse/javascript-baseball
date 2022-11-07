const MissionUtils = require("@woowacourse/mission-utils");
// const GameController = require("./GameController");
const ComputerModel = require("./ComputerModel");
const GameController = require("./GameController");
const UserModel = require("./UserModel");

class App {
  constructor() {
    this.GameController = new GameController();
    this.computerModel = new ComputerModel();
    this.userModel = new UserModel();
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const numberFromComputer = this.computerModel.getNumberFromComputer();
    console.log(numberFromComputer);
    this.try(numberFromComputer);
  }

  try(numberFromComputer) {
    MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (numberFromUser) => {
        const validNumberFromUser = this.userModel.convertStringToArray(
          this.userModel.isInputNumbersValid(numberFromUser)
        );
        const isClear = this.GameController.start(
          validNumberFromUser,
          numberFromComputer
        );
        this.try(numberFromComputer);
      }
    );
  }
}

module.exports = App;

const app = new App();
app.play();
