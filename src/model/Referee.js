const Game = require("./Game");
const Judgement = require("./Judgement");

class Referee {
  constructor() {
		this._game;
  }
	_isBall(prevIdx, curIdx) {
		if (curIdx >= 0 && curIdx !== prevIdx)
			return 1;
		return 0;
	}
	_isStrike(prevIdx, curIdx) {
		if (curIdx >= 0 && curIdx === prevIdx)
			return 1;
		return 0;
	}
	
	/** @param {Game} */
  chargeGame(game) {
		this._game = game;
  }
	/**
	 * @param {Array<number>} balls 
	 * @returns {Judgement}
	 */
	judge(balls) {
		return new Judgement(...this._game
			.indexOfBalls(balls)
			.reduce((acc, cur, index) => 
				[acc[0] + this._isBall(index, cur), acc[1] + this._isStrike(index, cur)], [0, 0]));
	}
}

module.exports = Referee;