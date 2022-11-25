//@ts-check
const Random = require("@woowacourse/mission-utils").Random;

class Game {
	#answerNumber;
	constructor() {
		this.#answerNumber = this.#getRandomBalls().join("");
	}
	#getRandomBalls(balls = []) {
		if (balls.length === 3)
			return balls;
		const number = Random.pickNumberInRange(1, 9);
		return this.#getRandomBalls(balls.includes(number) ? balls : [...balls, number]);
	}
	indexOfBalls(balls) {
		return balls.map((ball) => this.#answerNumber.indexOf(ball));
	}
}

module.exports = Game;