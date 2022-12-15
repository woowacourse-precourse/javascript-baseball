const GameCtrl = require('./GameCtrl');

class CarCtrl extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  start() {}

  gameProcess() {}

  end() {}
}

module.exports = CarCtrl;
