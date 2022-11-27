//@ts-check
const View = require("../View");
const Referee = require("../model/Referee");
const { GAME_STATE } = require("../enum");
const Game = require("../model/Game");
const Console = require("@woowacourse/mission-utils").Console;

class BaseballGame {
	#referee;
	#view;
	constructor() {
		this.#referee = new Referee();
		this.#view = new View(this.#ingHandler.bind(this), this.#endHandler.bind(this));
	}

	#ingHandler(command) {
		if (!BaseballGame.isValid(command))
			throw new Error("입력을 잘못 하셨네요 1에서 9 중복되지 않게 3자리");
		const balls = command.split("").map((item) => +item);
		const judgement = this.#referee.judge(balls);
		this.#next(judgement.isAllStrike() ? GAME_STATE.END : GAME_STATE.ING, judgement.toString());
	}
	
	#endHandler(command) {
		if (command === "1")
			this.start(GAME_STATE.RE);
		else if (command === "2")
			Console.close();
		else
			throw new Error("입력을 잘못 하셨네요 1 또는 2");
	}

	#next(state, result) {
		this.#view.output(state, result);
		this.#view.input(state);
	}

	/** 
	 * @param {string} num
	 * @returns {boolean}
	 */
	static isValid(num) {
		const isCorrectNumber = /\d/.test(num) && +num > 0 && num.length === 3;
		const isNotDuplicate = num.length === [...new Set(num)].length;
		if (isCorrectNumber && isNotDuplicate)
			return true;
		return false;
	}
	
	start(state = GAME_STATE.START) {
		this.#referee.chargeGame(new Game());
		this.#next(state, undefined);
	}
}

module.exports = BaseballGame;
