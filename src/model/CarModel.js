const { Random } = require('@woowacourse/mission-utils');
const GameModel = require('./GameModel');

class CarModel extends GameModel {
  #carNameList = [];
  #trailCnt = 0;

  constructor() {
    super();
  }

  setCarNameList(carNameList) {
    carNameList = carNameList.split(', ');
    this.#carNameList = carNameList;
  }

  setTrailCnt(trailCnt) {
    trailCnt = Number(trailCnt);
    this.#trailCnt = trailCnt;
  }

  isCarMovable() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    const isCarMovable = randomNumber >= 4;

    return isCarMovable;
  }

  checkWhoTheFinalWinnerIs(carMovingCnt) {
    carMovingCnt = Object.values(carMovingCnt);
    return Math.max(...carMovingCnt);
  }
}

module.exports = CarModel;
