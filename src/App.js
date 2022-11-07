const MissionUtils = require("@woowacourse/mission-utils");

class App {
	get getComNum() {
		let arr = [];
		while (arr.length < 3) {
			let num = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!arr.includes(num)) arr.push(num);
		}
		return arr;
	}

	play() {
		const comNumber = this.getComNum;

		this.gameStart(comNumber);
	}
	gameStart(comNumber) {
		MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
			const arr = userInput.split("").map((ele) => Number(ele));
			const userNumber = this.inputValidFn(arr);
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
		this.multiDataCheckFn(input, "유저 입력 데이터 중복 에러");
		this.totalLenCheckFn(3, input, "computer 랜덤 데이터 에러");

		input.forEach((data) => {
			this.isNumberCheckFn(data, "숫자가 아닌 다른 데이터 에러");
		});

		return input;
	}

	isNumberCheckFn(data, errMsg) {
		if (!(data >= 1 && data <= 9)) {
			throw new Error(errMsg);
		}
	}
	multiDataCheckFn(data, errMsg) {
		const arr = new Set(data);
		if (data.length !== [...arr].length) {
			throw new Error(errMsg);
		}
	}
	totalLenCheckFn(len, data, errMsg) {
		if (data.length !== len) {
			throw new Error(errMsg);
		}
	}
}

module.exports = App;

const app = new App();
app.play();
