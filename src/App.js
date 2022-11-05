const { Console } = require('@woowacourse/mission-utils');
const { countBall, countStrike, printBallCount } = require('./utils/BallCount');

class App {
	constructor() {
		this.NUMBER_LENGTH = 3;
	}

	play() {}

	runTurn(computerNumbers) {
		Console.readLine('숫자를 입력해주세요 : ', (input) => {
			const userNumbers = input.split('');
			const ball = countBall(userNumbers, computerNumbers);
			const strike = countStrike(userNumbers, computerNumbers);
			printBallCount(ball, strike);
			return strike === this.NUMBER_LENGTH ? this.quitGame() : this.runGame(computerNumbers);
		});
	}

	quitGame() {}
}

module.exports = App;
