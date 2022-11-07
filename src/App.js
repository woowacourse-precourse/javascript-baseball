const MissionUtils = require("@woowacourse/mission-utils");

const { ERROR_MSG, GAME_STATE_MSG } = require("./errorMsg");

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
			const arr = userInput.split("").map((ele) => Number(ele));
			const userNumber = this.inputValidFn(arr);
			console.log(comNumber, arr);
			const [ball, strike] = this.gameResult(comNumber, userNumber);
		});
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
