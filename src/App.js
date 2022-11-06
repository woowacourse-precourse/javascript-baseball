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
		this.MESSAGE = {
			start: '숫자 야구 게임을 시작합니다.',
			turn: '숫자를 입력해주세요 : ',
			end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
			replay: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
		};
	}

	play() {
		Console.print(this.MESSAGE.start);
		this.createNewGame();
	}

	createNewGame() {
		const computerNumbers = getUniqueNumbersInRange(1, 9, this.NUMBER_LENGTH);
		this.runGame(computerNumbers);
	}

	runGame(computerNumbers) {
		Console.readLine(this.MESSAGE.turn, (input) => this.runTurn(computerNumbers, input));
	}

	runTurn(computerNumbers, input) {
		this.checkInputIsValid(input);
		const userNumbers = input.split('');
		const ball = countBall(userNumbers, computerNumbers);
		const strike = countStrike(userNumbers, computerNumbers);
		printBallCount(ball, strike);
		return strike === this.NUMBER_LENGTH ? this.quitGame() : this.runGame(computerNumbers);
	}

	quitGame() {
		Console.print(this.MESSAGE.end);
		Console.readLine(this.MESSAGE.replay, (input) => this.replayOrClose(input));
	}

	replayOrClose(input) {
		checkInputIsOneOrTwo(input);
		return input === this.RESTART ? this.createNewGame() : Console.close();
	}

	checkInputIsValid(input) {
		checkInputLength(input, this.NUMBER_LENGTH);
		checkInputIsNumber(input);
		checkInputExcludeCertainNumber(input, 0);
		checkInputDuplicateNumber(input);
	}
}

module.exports = App;
