const { getUniqueNumberCount, pickUniqueNumbersInRange } = require('../utils/utils');
const { NUMBER } = require('../utils/constants');

class GameDataStore {
  #gameData;
  #gameDataView;

  constructor() {
    this.#gameData = {
      target: [],
      ballsAndStrikes: {},
    };
    this.#gameDataView = {};
  }

  initializeGameData() {
    this.#gameData = this.makeInitGameData();
    this.#gameDataView.update(this.#gameData);
  }

  setInput(input) {
    this.gameInputValidator(input);

    this.#gameData.ballsAndStrikes = this.calcBallsAndStrikes(
      this.#gameData.target,
      input,
    );
    this.#gameDataView.update(this.#gameData);
  }

  makeInitGameData() {
    const target = pickUniqueNumbersInRange(
      NUMBER.RANGE_START,
      NUMBER.RANGE_END,
      NUMBER.DIGITS,
    ).map(String);

    return {
      target,
      ballsAndStrikes: {},
    };
  }

  gameInputValidator(input) {
    if (input.length !== NUMBER.DIGITS) {
      throw new Error();
    }

    if (getUniqueNumberCount(input) !== NUMBER.DIGITS) {
      throw new Error();
    }
  }

  calcBallsAndStrikes(target, input) {
    const inputArray = Array.from(input);
    const initialValue = {
      balls: 0,
      strikes: 0,
    };

    return inputArray.reduce((acc, cur, idx) => {
      if (cur === target[idx]) {
        acc.strikes += 1;
        return acc;
      }

      if (target.includes(cur)) {
        acc.balls += 1;
        return acc;
      }

      return acc;
    }, initialValue);
  }

  injection(GameDataView) {
    this.#gameDataView = GameDataView;
  }
}

module.exports = GameDataStore;
