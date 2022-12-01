const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BaseballMaker = require('../Model/BaseballMaker');

class Controller {
  #uniqueNumberList

  constructor(){
    this.#uniqueNumberList;
  }

  gameStart() {
    OutputView.printStartGuide();
  }

  getAnswer(){
    this.#uniqueNumberList = BaseballMaker.getRandomNumber();
  }




}

module.exports = Controller