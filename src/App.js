const { Random, Console } = require("@woowacourse/mission-utils");
const { ERROR_MSG, GAME_STATE_MSG } = require("./errorMsg");
const { GAME_STATE, TOTAL_LEN, GAME, USER_DATA } = require("./state");

class App {
	constructor() {
		this.comNumber = [];
	}

	play() {
		this.comNumber = this.makeComNum();
		this.gameStart();
	}
	makeComNum() {
		let arr = [];
		for (let count = 0; count < 3; count++) {
			let num = Random.pickNumberInRange(USER_DATA.MIN, USER_DATA.MAX);
			if (!arr.includes(num)) arr.push(num);
		}
		return arr;
	}

	gameStart() {
		Console.readLine(GAME_STATE_MSG.READY, (userInput) => {
			const userData = userInput.split("").map((ele) => Number(ele));
			const userNumber = this.inputValidFn(TOTAL_LEN.INPUT, userData);
			const [ball, strike] = this.gameResult(userNumber);

			const gameOver = this.gamePrint(ball, strike);

			if (gameOver) {
				Console.print(`${GAME_STATE_MSG.SUCCESS}`);
				this.gameSelect();
			} else {
				this.gameStart();
			}
		});
	}

	gameSelect() {
		Console.readLine(GAME_STATE_MSG.NEWGAME, (modeInput) => {
			const userData = modeInput.split("").map((ele) => Number(ele));
			const [modeInputValid] = this.inputValidFn(TOTAL_LEN.MODE, userData);

			if (modeInputValid === GAME.NEW) {
				this.play();
			} else if (modeInputValid === GAME.END) {
				Console.print(GAME_STATE_MSG.END);
				Console.close();
			}
		});
	}

	gamePrint(ball, strike) {
		let gameOver = false;
		if (ball === 0 && strike === 0) Console.print(GAME_STATE.NOTTHING);
		else if (strike === 3) {
			gameOver = true;
			Console.print(`${strike}${GAME_STATE.STRIKE}`);
		} else if (strike === 0 && ball !== 0) {
			Console.print(`${ball}${GAME_STATE.BALL}`);
		} else if (ball === 0 && strike !== 0) {
			Console.print(`${strike}${GAME_STATE.BALL}`);
		} else {
			Console.print(`${ball}${GAME_STATE.BALL} ${strike}${GAME_STATE.STRIKE}`);
		}

		return gameOver;
	}

	gameResult(user) {
		let ball = 0,
			strike = 0;

		user.forEach((score, index) => {
			if (score === this.comNumber[index]) strike++;
			else if (this.comNumber.includes(score)) ball++;
		});
		return [ball, strike];
	}

	inputValidFn(lenCheck, input) {
		this.multiDataCheckFn(input);
		this.totalLenCheckFn(lenCheck, input);

		input.forEach((data) => {
			this.isNumberCheckFn(data);
		});

		return input;
	}

	isNumberCheckFn(data) {
		if (!(data >= 1 && data <= 9)) {
			throw new Error(ERROR_MSG.TYPE_ERR);
		}
	}
	multiDataCheckFn(data) {
		const arr = new Set(data);
		if (data.length !== [...arr].length) {
			throw new Error(ERROR_MSG.MULTI_ERR);
		}
	}
	totalLenCheckFn(len, data) {
		if (data.length !== len) {
			throw new Error(ERROR_MSG.LEN_ERR);
		}
	}
}

module.exports = App;

const app = new App();
app.play();
