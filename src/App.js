const MissionUtils = require("@woowacourse/mission-utils");

const { ERROR_MSG, GAME_STATE_MSG, GAME_STATE } = require("./errorMsg");

class App {
	constructor() {
		this.comNumber = [];
	}

	play() {
		this.comNumber = this.makeComNum();
		this.gameStart(this.comNumber);
	}
	makeComNum() {
		let arr = [];
		for (let count = 0; count < 3; count++) {
			let num = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!arr.includes(num)) arr.push(num);
		}
		return arr;
	}

	gameStart(comNumber) {
		MissionUtils.Console.readLine(GAME_STATE_MSG.READY, (userInput) => {
			const userData = userInput.split("").map((ele) => Number(ele));
			const userNumber = this.inputValidFn(userData);
			const [ball, strike] = this.gameResult(comNumber, userNumber);

			const gameOver = this.gamePrint(ball, strike);
		});
	}

	gamePrint(ball, strike) {
		let gameOver = false;
		if (ball === 0 && strike === 0)
			MissionUtils.Console.print(GAME_STATE.NOTTHING);
		else if (strike === 3) {
			gameOver = true;
			MissionUtils.Console.print(`${strike}${GAME_STATE.STRIKE}`);
		} else if (strike === 0 && ball !== 0) {
			MissionUtils.Console.print(`${ball}${GAME_STATE.BALL}`);
		} else if (ball === 0 && strike !== 0) {
			MissionUtils.Console.print(`${strike}${GAME_STATE.BALL}`);
		} else {
			MissionUtils.Console.print(
				`${ball}${GAME_STATE.BALL} ${strike}${GAME_STATE.STRIKE}`
			);
		}

		return gameOver;
	}

	gameResult(com, user) {
		let ball = 0,
			strike = 0;

		user.forEach((score, index) => {
			if (score === com[index]) strike++;
			else if (com.includes(score)) ball++;
		});
		return [ball, strike];
	}

	inputValidFn(input) {
		this.multiDataCheckFn(input);
		this.totalLenCheckFn(3, input);

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
