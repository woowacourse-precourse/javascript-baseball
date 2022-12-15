const GameCtrl = require('./GameCtrl');
const { CarListValidator } = require('../validators');

class CarCtrl extends GameCtrl {
  start() {
    this.view.renderGameStartCommand();
    this.#setTrailCarList();
  }

  #setTrailCarList() {
    this.view.inputCarNameList(carNameList => {
      const splittedCarNameList = this.model.splitCarNameList(carNameList);
      CarListValidator.validateCarList(splittedCarNameList);

      this.model.setCarNameList(splittedCarNameList);
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
    const carExecutionResult = [];

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
    carExecutionResult.push(currExecutionResult);

    this.processNextStep({ carAdvanceCnt, carExecutionResult });
  }

  makeCurrExecutionResult(carAdvanceCnt) {
    return Object.entries(carAdvanceCnt).reduce(
      (currExecutionResult, [currCarName, currCarCnt]) => {
        const currCarAdvance = Array(currCarCnt).fill('-').join('');

        const currCarResult = `${currCarName}: ${currCarAdvance}\n`;
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

  end({ carAdvanceCnt, carExecutionResult }) {
    this.view.renderGameTrailResultCommand(carExecutionResult.join('\n'));

    const gameWinner = this.model.checkWhoTheFinalWinnerIs(carAdvanceCnt);
  }
}

module.exports = CarCtrl;
