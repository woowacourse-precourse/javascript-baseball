const { Console, Random } = require('@woowacourse/mission-utils');

class App {
	computerNumArr = [];

	play() {
		Console.print(MESSAGES.START);
		this.initGame();
		// TODO: this.playGame();
	}

	initGame() {
		while (this.computerNumArr.length < 3) {
			let number = Random.pickNumberInRange(1, 9);
			if (!this.computerNumArr.includes(number))
				this.computerNumArr.push(number);
		}
		Console.print(this.computerNumArr);
	}
}

module.exports = App;
