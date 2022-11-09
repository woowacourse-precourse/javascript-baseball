//@ts-check
const View = require("./View");
const Referee = require("./model/Referee");
const { GAME_STATE } = require("./enum");
const Game = require("./model/Game");
const Console = require("@woowacourse/mission-utils").Console;

class Controller {
	constructor() {
		this._referee = new Referee();
		this._view = new View(this._ingHandler.bind(this), this._endHandler.bind(this));
	}

	/**
	 * 
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

	_ingHandler(command) {
		if (!Controller.isValid(command))
			throw new Error("입력을 잘못 하셨네요 1에서 9 중복되지 않게 3자리");
		const judgement = this._referee.judge(command.split("").map((item) => +item));
		this._next(judgement.isAllStrike() ? GAME_STATE.END : GAME_STATE.ING, judgement.toString());
	}
	
	_endHandler(command) {
		if (command === "1")
			this.start(GAME_STATE.ING);
		else if (command === "2")
			Console.close();
		else
			throw new Error("입력을 잘못 하셨네요 1 또는 2");
	}

	_next(state, result) {
		this._view.output(state, result);
		this._view.input(state);
	}

	start(state = GAME_STATE.START) {
		this._referee.chargeGame(new Game());
		this._next(state, undefined);
	}
}

module.exports = Controller;
