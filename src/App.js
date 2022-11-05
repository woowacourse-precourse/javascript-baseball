const BaseballDto = require("./Baseball/Baseball.dto");
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
    let Finished = false;
    while (!Finished) {
      const userNumbers = baseballComputer.getUserNumbers();
      const baseballDto = baseballComputer.getBallState(userNumbers);
      Finished = baseballComputer.isFinish(baseballDto);
    }
  }
}

module.exports = App;
