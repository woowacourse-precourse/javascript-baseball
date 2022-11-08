const { print, readLine, close } = require("./utils");

const ComputerModel = require("./ComputerModel");
const GameManager = require("./GameManager");
const UserModel = require("./UserModel");
const GAME_MESSAGE = require("./constants/message");
const GAME_VALUE = require("./constants/values");

class App {
  constructor() {
    this.GameManager = new GameManager();
    this.computerModel = new ComputerModel();
    this.userModel = new UserModel();
  }

  play() {
    print(GAME_MESSAGE.NOTIFY_START_MESSAGE);
    const numberFromComputer = this.computerModel.getNumberFromComputer();
    this.gameStart(numberFromComputer);
  }

  gameStart(numberFromComputer) {
    readLine(GAME_MESSAGE.ASK_INPUT_MESSAGE, (numberFromUser) => {
      const validNumberFromUser = this.userModel.convertStringToArray(
        this.userModel.isInputNumbersValid(numberFromUser)
      );

      const isGameClear = this.GameManager.apply(validNumberFromUser, numberFromComputer);

      if (isGameClear === true) this.askUserRestartOrNot();
      if (isGameClear === false) this.gameStart(numberFromComputer);
    });
  }

  askUserRestartOrNot() {
    readLine(GAME_MESSAGE.ASK_GAME_CONTINUE_OR_EXIT, (response) => {
      this.updateStateRestartOrNotDependingResponse(response);
    });
  }

  updateStateRestartOrNotDependingResponse(response) {
    const isInputNotValid = (input) => input !== GAME_VALUE.RESTART && input !== GAME_VALUE.EXIT;
    if (response === GAME_VALUE.RESTART) this.play();
    if (response === GAME_VALUE.EXIT) close();
    if (isInputNotValid(response)) throw Error(GAME_MESSAGE.NOTIFY_INPUT_WRONG_NUMBER);
  }
}

module.exports = App;

const app = new App();
app.play();
