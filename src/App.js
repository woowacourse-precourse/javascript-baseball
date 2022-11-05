const BaseballValidator = require("./Baseball/Baseball.validator");
const BaseballOutput = require("./Baseball/Baseball.output");
const BaseballComputer = require("./Baseball/Baseball.computer");

class App {
  play() {
    const baseballValidator = new BaseballValidator();
    const baseballOutput = new BaseballOutput();
    const baseballComputer = new BaseballComputer(
      baseballOutput,
      baseballValidator
    );
    let finished = false;
    baseballOutput.start();
    while (!finished) {
      const userNumbers = baseballComputer.getUserNumbers();
      const baseballDto = baseballComputer.getBallState(userNumbers);
      finished = baseballComputer.isFinish(baseballDto);
    }
    if (baseballComputer.restart()) {
      this.play();
    }
  }
}

module.exports = App;
