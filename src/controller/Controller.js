const OutputView = require("../views/OutputView");
const InputView = require("../views/InputView");
const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");
const Game = require("../Game");

class Controller {
  #game;
  #cars;
  startGame() {
    OutputView.printStart();
    this.inputCarsHandler();
  }

  inputCarsHandler() {
    InputView.readCarName(this.carsHandler.bind(this));
  }

  carsHandler(cars) {
    try {
      Validator.validateCars(cars.split(",").map((car) => car.trim()));
      this.#cars = cars.split(",").map((car) => car.trim());
      this.#game = new Game(this.#cars);
      this.inputTriesHandler();
    } catch (error) {
      Console.print(error);
      this.inputCarsHandler();
    }
  }

  inputTriesHandler() {
    InputView.readTries(this.triesHandler.bind(this));
  }

  triesHandler(tries) {
    try {
      Validator.validateTries(tries);
      OutputView.printResult(this.#cars, this.#game.playGame(tries));
    } catch (error) {
      Console.print(error);
      this.inputTriesHandler();
    }
  }
}

module.exports = Controller;
