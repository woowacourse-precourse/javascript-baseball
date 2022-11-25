const Output = require("./view/OutputView.js");
const Input = require("./view/inputView.js");
const Controller = require("./controller/Constroller");
const Model = require("./model/Model");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    let shouldRegame = 1;
    Output.printStartMent();
    while (shouldRegame !== 2) {
      const model = new Model();
      model.generateComputerNumbers();
      while (true) {
        const input = await Input.inputNumbers().then((result) => {
          return result;
        });
        const stringToNumber = await Controller.stringToNumber(input);
        const validatedNumbers = await Controller.validate(stringToNumber);
        model.updatdeData(null, validatedNumbers);
        const calculateCounts = model.calculate();
        const makedResultString = Controller.makeResultString(calculateCounts);
        Output.printResult(makedResultString);
        if (calculateCounts.countStrike === 3) {
          break;
        }
      }
      shouldRegame = await Input.shouldRegame();
    }
  }
}

module.exports = App;
