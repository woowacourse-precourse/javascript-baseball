const GameCtrl = require('./GameCtrl');

class CarCtrl extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.renderGameStartCommand();
    this.#setTrailCarList();
  }

  #setTrailCarList() {
    this.view.inputCarNameList(carNameList => {
      this.model.setCarNameList(carNameList);
      this.#setTrailCnt();
    });
  }

  #setTrailCnt() {
    this.view.inputTrailCnt(trailCnt => {
      this.model.setTrailCnt(trailCnt);
      this.gameProcess();
    });
  }

  gameProcess() {}

  end() {}
}

module.exports = CarCtrl;
