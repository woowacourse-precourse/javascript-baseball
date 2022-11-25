const Game = require("./Game");
const Judgement = require("./Judgement");

class Referee {
	#game;
  constructor() {
		this.#game;
  }
	#isBall(prevIdx, curIdx) {
		if (curIdx >= 0 && curIdx !== prevIdx)
			return 1;
		return 0;
	}
	#isStrike(prevIdx, curIdx) {
		if (curIdx >= 0 && curIdx === prevIdx)
			return 1;
		return 0;
	}
	
	/** @param {Game} */
  chargeGame(game) {
		this.#game = game;
  }
	/**
	 * @param {Array<number>} balls 
	 * @returns {Judgement}
	 */
	judge(balls) {
		return new Judgement(...this.#game
			.indexOfBalls(balls)
			.reduce((acc, cur, index) => 
				[acc[0] + this.#isBall(index, cur), acc[1] + this.#isStrike(index, cur)], [0, 0]));
	}
}

module.exports = Referee;