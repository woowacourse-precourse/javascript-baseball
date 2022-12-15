const { Random } = require('@woowacourse/mission-utils');
const GameModel = require('./GameModel');

class CarModel extends GameModel {
  #carNameList = [];
  #trailCnt = 0;

  splitCarNameList(carNameList) {
    return carNameList.split(', ');
  }

  setCarNameList(carNameList) {
    this.#carNameList = carNameList;
  }

  initTrailCnt(trailCnt) {
    this.#trailCnt = Number(trailCnt);
  }

  reduceTrailCnt() {
    this.#trailCnt -= 1;
  }

  getCarNameList() {
    return this.#carNameList;
  }

  getTrailCnt() {
    return this.#trailCnt;
  }

  initCarAdvanceCnt() {
    const carAdvanceCnt = this.#carNameList.reduce((carAdvanceCnt, value) => {
      return { ...carAdvanceCnt, [value]: 0 };
    }, {});

    return carAdvanceCnt;
  }

  isCarMovable() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    const isCarMovable = randomNumber >= 4;

    return isCarMovable;
  }

  isGameEnd() {
    return this.#trailCnt === 0;
  }

  checkWhoTheFinalWinnerIs(carMovingCnt) {
    carMovingCnt = Object.values(carMovingCnt);
    return Math.max(...carMovingCnt);
  }
}

module.exports = CarModel;
