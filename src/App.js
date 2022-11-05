const BaseballValidator = require("./Baseball/Baseball.validator");
const BaseballOutput = require("./Baseball/Baseball.output");
const BaseballComputer = require("./Baseball/Baseball.computer");

class App {
  #start() {
    const baseballComputer = new BaseballComputer(
      BaseballOutput,
      BaseballValidator
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
    BaseballOutput.start();
    this.#start();
  }
}

module.exports = App;
