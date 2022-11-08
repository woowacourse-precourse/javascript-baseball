//@ts-check
const Random = require("@woowacourse/mission-utils").Random;

class Game {
	constructor() {
		this._answerNumber = this._getRandomBalls().join("");
	}
	_getRandomBalls(balls = []) {
		if (balls.length === 3)
			return balls;
		const number = Random.pickNumberInRange(1, 9);
		return this._getRandomBalls(balls.includes(number) ? balls : [...balls, number]);
	}
	indexOfBalls(balls) {
		return balls.map((ball) => this._answerNumber.indexOf(ball));
	}
}

module.exports = Game;