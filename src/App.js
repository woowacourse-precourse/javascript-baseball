const CarView = require('./view/CarView');
const CarModel = require('./model/CarModel');
const CarCtrl = require('./controller/CarCtrl');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  constructor() {
    this.view = new CarView(InputView, OutputView);
    this.model = new CarModel();
    this.ctrl = new CarCtrl(this.view, this.model);
  }

  play() {
    this.ctrl.start();
  }
}

module.exports = App;
