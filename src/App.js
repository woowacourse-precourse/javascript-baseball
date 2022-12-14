const BaseballView = require('./view/BaseballView');
const BaseballModel = require('./model/BaseballModel');
const BaseballCtrl = require('./controller/BaseballCtrl');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  constructor() {
    this.view = new BaseballView(InputView, OutputView);
    this.model = new BaseballModel();
    this.ctrl = new BaseballCtrl(this.view, this.model);
  }

  play() {
    this.ctrl.start();
  }
}

module.exports = App;
