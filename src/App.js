const { Console } = require('@woowacourse/mission-utils');
const { getUniqueNumbersInRange } = require('./utils/RandomNumber');
const { countBall, countStrike, printBallCount } = require('./utils/BallCount');
const {
	checkInputLength,
	checkInputIsNumber,
	checkInputExcludeCertainNumber,
	checkInputDuplicateNumber,
} = require('./utils/InputChecker');

class App {
	constructor() {
		this.NUMBER_LENGTH = 3;
	}

	play() {}

	createNewGame() {
		const computerNumbers = getUniqueNumbersInRange(1, 9, this.NUMBER_LENGTH);
		this.runTurn(computerNumbers);
	}

	runTurn(computerNumbers) {
		Console.readLine('숫자를 입력해주세요 : ', (input) => {
			this.checkTurnInputIsValid(input);
			const userNumbers = input.split('');
			const ball = countBall(userNumbers, computerNumbers);
			const strike = countStrike(userNumbers, computerNumbers);
			printBallCount(ball, strike);
			return strike === this.NUMBER_LENGTH ? this.quitGame() : this.runGame(computerNumbers);
		});
	}

	quitGame() {}

	checkTurnInputIsValid(input) {
		checkInputLength(input, this.NUMBER_LENGTH);
		checkInputIsNumber(input);
		checkInputExcludeCertainNumber(input, 0);
		checkInputDuplicateNumber(input);
	}
}

module.exports = App;
