const Output = require("./view/OutputView.js");
const Input = require("./view/inputView.js");
const Controller = require('./controller/Constroller')

class App {

  async play() {
    Output.printStartMent();
    while (true) {
      const input = await Input.input().then((result) => {return result})
      const stringToNumber = await Controller.stringToNumber(input)
      const validatedNumbers = Controller.validate(stringToNumber)
      
      break;
    }
  }
}

module.exports = App;
