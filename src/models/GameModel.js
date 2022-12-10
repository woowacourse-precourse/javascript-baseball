const { MakeNumbers } = require("../utils/MakeTargetNumbers");
const PlayerModel = require("./PlayerModel");

class GameModel {
  #player;
  #target;
  #gameStatus;

  constructor() {
    this.initGame();
  }

  onGame(input) {
    this.#player.inputToArray(input);

    const ball = this.countBall();
    const strike = this.countStrike();

    if (this.isCorrect(strike)) this.#gameStatus = true;

    const result = this.buildResultText(ball, strike);

    return result;
  }

  buildResultText(ball, strike) {
    if (ball == 0 && strike == 0) return "낫싱";
    else if (ball > 0 && strike == 0) return `${ball}볼`;
    else if (ball == 0 && strike > 0) return `${strike}스트라이크`;

    return `${ball}볼 ${strike}스트라이크`;
  }

  isRetry(input) {
    return input === 1;
  }

  initGame() {
    this.#player = new PlayerModel();
    this.#target = MakeNumbers();
    this.#gameStatus = false;
  }

  getGameStatus() {
    const status = this.#gameStatus;
    return status;
  }

  isCorrect(strike) {
    return strike === this.#target.length;
  }

  countBall() {
    let ball = 0;
    const userInputArray = this.#player.getUserInputArray();

    userInputArray.forEach((number, index) => {
      const targetIndex = this.#target.indexOf(number);

      if (index !== targetIndex && targetIndex !== -1) ball += 1;
    });

    return ball;
  }

  countStrike() {
    let strike = 0;
    const userInputArray = this.#player.getUserInputArray();

    this.#target.forEach((number, index) => {
      if (number === userInputArray[index]) strike += 1;
    });

    return strike;
  }
}

module.exports = GameModel;
