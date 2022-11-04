const MissionUtils = require('@woowacourse/mission-utils');
const {
	NUMBER_LENGTH,
	NUMBER_RANGE,
	SHOULD_NOT_INCLUDE_NUMBER,
	RESTART_ANSWER,
	SCORE_START_NUMBER,
	RESULT_MESSAGES,
	GAME_MESSAGES,
	ERROR_MESSAGES,
} = require('./constants');

class App {
	constructor() {
		this.computerNumber = '';
		this.gameEnd = false;
	}

	initializeGame() {
		this.computerNumber = this.getComputerNumber();
		this.gameEnd = false;
	}

	play() {
		this.printMessage(GAME_MESSAGES.START_MESSAGE);
		this.playMainGame();
		this.printMessage(GAME_MESSAGES.GAME_RESTART_MESSAGE);
		this.checkRestart();
	}

	playMainGame() {
		this.initializeGame();
		while (this.gameEnd === false) {
			const resultMessage = this.getCompareResult(this.computerNumber, this.getUserNumber());
			this.printMessage(resultMessage);
			if (resultMessage === GAME_MESSAGES.THREE_STRIKE_MESSAGE) {
				this.gameEnd = true;
				this.printMessage(GAME_MESSAGES.GAME_END_MESSAGE);
			}
		}
	}

	checkRestart() {
		MissionUtils.Console.readLine(GAME_MESSAGES.GAME_RESTART_MESSAGE, answer => {
			if (!(answer === RESTART_ANSWER.YES || answer === RESTART_ANSWER.NO)) {
				this.closeConsole();
				throw new Error(GAME_MESSAGES.RESTART_ERROR_MESSAGE);
			}
			if (answer === RESTART_ANSWER.YES) {
				this.printMessage(answer);
				this.playMainGame();
				return;
			}
			this.closeConsole();
		});
	}

	closeConsole() {
		MissionUtils.Console.close();
	}

	printMessage(message) {
		MissionUtils.Console.print(message);
	}

	getComputerNumber() {
		const numSet = new Set();
		while (numSet.size !== NUMBER_LENGTH) {
			numSet.add(MissionUtils.Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX));
		}
		return [...numSet].join('');
	}

	getUserNumber() {
		let userAnswer;
		MissionUtils.Console.readLine(GAME_MESSAGES.INPUT_USER_NUM_MESSAGE, answer => {
			this.printMessage(GAME_MESSAGES.USER_INPUT_FEEDBACK_MESSAGE(answer));
			if (!this.validateUserNumber(answer)) {
				throw new Error(ERROR_MESSAGES.WRONG_NUMBER_ERROR_MESSAGE);
			}
			userAnswer = answer;
		});
		return userAnswer;
	}

	validateUserNumber(answer) {
		const userNumberSet = new Set();
		[...answer].forEach(string => userNumberSet.add(string));
		if (userNumberSet.size !== NUMBER_LENGTH) {
			return false;
		}
		if (userNumberSet.has(SHOULD_NOT_INCLUDE_NUMBER)) {
			return false;
		}
		return true;
	}

	getCompareResult(computerNumber, userNumber) {
		const ballAndStrikeScore = this.getBallAndStrikeScore(computerNumber, userNumber);
		const strikeScore = this.getStrikeScore(computerNumber, userNumber);
		const ballScore = ballAndStrikeScore - strikeScore;
		return this.getResultString(strikeScore, ballScore);
	}

	getBallAndStrikeScore(computerNumber, userNumber) {
		let ballAndStrikeScore = SCORE_START_NUMBER;
		[...computerNumber].forEach(number => {
			if ([...userNumber].includes(number)) {
				ballAndStrikeScore += 1;
			}
		});
		return ballAndStrikeScore;
	}

	getStrikeScore(computerNumber, userNumber) {
		let strikeScore = SCORE_START_NUMBER;
		[...computerNumber].forEach((number, index) => {
			if (number === [...userNumber][index]) {
				strikeScore += 1;
			}
		});
		return strikeScore;
	}

	getResultString(strikeScore, ballScore) {
		if (strikeScore + ballScore === SCORE_START_NUMBER) {
			return RESULT_MESSAGES.NOTHING;
		}
		if (strikeScore === SCORE_START_NUMBER) {
			return RESULT_MESSAGES.ONLY_BALL(ballScore);
		}
		if (ballScore === SCORE_START_NUMBER) {
			return RESULT_MESSAGES.ONLY_STRIKE(strikeScore);
		}
		return RESULT_MESSAGES.BALL_AND_STRIKE({ ballScore, strikeScore });
	}
}

module.exports = App;
