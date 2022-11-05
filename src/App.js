const { Console } = require('@woowacourse/mission-utils');
const { getUniqueNumbersInRange } = require('./utils/RandomNumber');
const { countBall, countStrike, printBallCount } = require('./utils/BallCount');
const {
	checkInputLength,
	checkInputIsNumber,
	checkInputExcludeCertainNumber,
	checkInputDuplicateNumber,
	checkInputIsOneOrTwo,
} = require('./utils/InputChecker');

class App {
	constructor() {
		this.RESTART = '1';
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

	quitGame() {
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		const message = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
		Console.readLine(message, (input) => this.replayOrClose(input));
	}

	replayOrClose(input) {
		checkInputIsOneOrTwo(input);
		return input === this.RESTART ? this.createNewGame() : App.closeApp();
	}

	checkTurnInputIsValid(input) {
		checkInputLength(input, this.NUMBER_LENGTH);
		checkInputIsNumber(input);
		checkInputExcludeCertainNumber(input, 0);
		checkInputDuplicateNumber(input);
	}

	static closeApp() {
		Console.close();
	}
}

module.exports = App;
