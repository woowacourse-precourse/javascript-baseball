const { print, readLine, close } = require("./utils");
// const GameController = require("./GameController");
const ComputerModel = require("./ComputerModel");
const GameManager = require("./GameManager");
const UserModel = require("./UserModel");

class App {
  constructor() {
    this.GameManager = new GameManager();
    this.computerModel = new ComputerModel();
    this.userModel = new UserModel();
  }

  play() {
    print("숫자 야구 게임을 시작합니다.");

    const numberFromComputer = this.computerModel.getNumberFromComputer();
    this.try(numberFromComputer);
  }

  try(numberFromComputer) {
    readLine("숫자를 입력해주세요 : ", (numberFromUser) => {
      const validNumberFromUser = this.userModel.convertStringToArray(
        this.userModel.isInputNumbersValid(numberFromUser)
      );
      const isGameClear = this.GameManager.start(validNumberFromUser, numberFromComputer);
      if (isGameClear === true) this.askUserRestartOrNot();
      if (isGameClear === false) this.try(numberFromComputer);
    });
  }

  askUserRestartOrNot() {
    const RESTART = "1";
    const EXIT = "2";
    const inputNotOneOrTwo = (response) => response !== RESTART && response !== EXIT;

    readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (response) => {
      if (response === RESTART) this.play();
      if (response === EXIT) close();
      if (inputNotOneOrTwo(response)) throw Error("1또는 2만 입력해주세요.");
    });
  }
}

module.exports = App;

const app = new App();
app.play();
