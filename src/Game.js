const GenerateRandomNumber = require("./GenerateRandomNumber");

class Game {
  #cars;
  #tries;
  #results;

  constructor(cars) {
    this.#cars = cars;
  }

  setTry(tries) {
    this.#tries = tries;
  }

  playGame(tries) {
    this.setTry(tries);
    this.makeRace();
    let race = this.calcResult();

    return [race, this.calcWinner(race)];
  }

  makeRace() {
    this.#results = GenerateRandomNumber(this.#cars.length, +this.#tries);
  }

  calcResult() {
    let prefixRes = [];
    this.#results.forEach((result, outIdx) => {
      outIdx == 0 ? prefixRes.push(result) : prefixRes.push([]);
      result.forEach((res, inIdx) => {
        if (outIdx != 0)
          prefixRes[outIdx].push(res + prefixRes[outIdx - 1][inIdx]);
      });
    });
    return prefixRes;
  }

  calcWinner(winner) {
    let max = 0;
    let finalRace = winner[winner.length - 1];
    finalRace.forEach((val) => {
      max = Math.max(max, val);
    });

    return this.confirmWinner(max, finalRace);
  }

  confirmWinner(max, finalRace) {
    let winnerList = [];
    finalRace.forEach((val, idx) => {
      if (val === max) winnerList.push(this.#cars[idx]);
    });
    return winnerList;
  }
}
module.exports = Game;
