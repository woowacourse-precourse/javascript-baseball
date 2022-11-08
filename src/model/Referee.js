const Game = require("./Game");
const Judgement = require("./Judgement");

class Referee {
  constructor() {
		this._game;
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
	}
}

module.exports = Referee;