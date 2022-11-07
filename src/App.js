const { print, readLine, close } = require("./utils");
// const GameController = require("./GameController");
const ComputerModel = require("./ComputerModel");
const GameManager = require("./GameManager");
const UserModel = require("./UserModel");
const GAME_MESSAGE = require("./constants/message");

class App {
  constructor() {
    this.GameManager = new GameManager();
    this.computerModel = new ComputerModel();
    this.userModel = new UserModel();
  }

  play() {
    print(GAME_MESSAGE.NOTIFY_START_MESSAGE);

    const numberFromComputer = this.computerModel.getNumberFromComputer();
    this.try(numberFromComputer);
  }

  try(numberFromComputer) {
    readLine(GAME_MESSAGE.ASK_INPUT_MESSAGE, (numberFromUser) => {
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
    const isInputNotValid = (input) => input !== RESTART && input !== EXIT;

    readLine(GAME_MESSAGE.ASK_GAME_CONTINUE_OR_EXIT, (response) => {
      if (response === RESTART) this.play();
      if (response === EXIT) close();
      if (isInputNotValid(response)) throw Error(GAME_MESSAGE.NOTIFY_INPUT_WRONG_NUMBER);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
