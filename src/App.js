const Output = require("./view/OutputView.js");
const Input = require("./view/inputView.js");
const Controller = require("./controller/Constroller");
const Model = require("./model/Model");

class App {
  async play() {
    Output.printStartMent();
    const model = new Model();
    model.generateComputerNumbers();
    while (true) {
      const input = await Input.input().then((result) => {
        return result;
      });
      const stringToNumber = await Controller.stringToNumber(input);
      const validatedNumbers = Controller.validate(stringToNumber);
      model.updatdeData(null, validatedNumbers);

      break;
    }
  }
}

module.exports = App;
