const Model = require('./model/number-baseball.model');
const View = require('./view/number-baseball.view');
const Controller = require('./controller/number-baseball.controller');

class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.Controller = new Controller(this.view, this.model);
  }
  play() {
    this.Controller.start();
  }
}

module.exports = App;
