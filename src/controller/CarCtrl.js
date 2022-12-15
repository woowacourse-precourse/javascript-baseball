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
      this.model.initTrailCnt(trailCnt);
      this.gameProcess();
    });
  }

  gameProcess() {
    const carAdvanceCnt = this.model.initCarAdvanceCnt();
    const carExecutionResult = '';

    this.move({ carAdvanceCnt, carExecutionResult });
  }

  move({ carAdvanceCnt, carExecutionResult }) {
    const carNameList = this.model.getCarNameList();

    Array.from(carNameList).forEach(carName => {
      const isCarMovable = this.model.isCarMovable();

      if (isCarMovable) {
        carAdvanceCnt[carName] += 1;
      }
    });

    const currExecutionResult = this.makeCurrExecutionResult(carAdvanceCnt);
    currExecutionResult.concat(carExecutionResult);

    this.processNextStep({ carAdvanceCnt, carExecutionResult });
  }

  makeCurrExecutionResult(carAdvanceCnt) {
    return Object.entries(carAdvanceCnt).reduce(
      (currExecutionResult, [currCarName, currCarCnt]) => {
        const currCarAdvance = Array(currCarCnt).fill('-').join('');

        const currCarResult = `${currCarName}: ${currCarAdvance}`;
        return currExecutionResult.concat(currCarResult);
      },
      '',
    );
  }

  processNextStep({ carAdvanceCnt, carExecutionResult }) {
    this.model.reduceTrailCnt();

    const isGameEnd = this.model.isGameEnd();
    if (isGameEnd) return this.end({ carAdvanceCnt, carExecutionResult });

    return this.move({ carAdvanceCnt, carExecutionResult });
  }

  end() {}
}

module.exports = CarCtrl;
