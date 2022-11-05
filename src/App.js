const BaseballValidator = require("./Baseball/Baseball.validator");
const BaseballOutput = require("./Baseball/Baseball.output");
const BaseballComputer = require("./Baseball/Baseball.computer");

class App {
  #baseballValidator = new BaseballValidator();
  #baseballOutput = new BaseballOutput();
  #start() {
    const baseballComputer = new BaseballComputer(
      this.#baseballOutput,
      this.#baseballValidator
    );
    let finished = false;
    while (!finished) {
      const userNumbers = baseballComputer.getUserNumbers();
      const baseballDto = baseballComputer.getBallState(userNumbers);
      finished = baseballComputer.isFinish(baseballDto);
    }
    if (baseballComputer.restart()) {
      this.#start();
    }
  }
  play() {
    this.#baseballOutput.start();
    this.#start();
  }
}

module.exports = App;
