const MissionUtils = require('@woowacourse/mission-utils');
const {
	START_MESSAGE,
	NUMBER_LENGTH,
	NUMBER_RANGE,
	ERROR_MESSAGE,
	INPUT_USER_NUM_MESSAGE,
	SHOULD_NOT_INCLUDE_NUMBER,
	USER_INPUT_FEEDBACK_MESSAGE,
	THREE_STRIKE_MESSAGE,
	GAME_END_MESSAGE,
	GAME_RESTART_MESSAGE,
	RESTART_ANSWER,
	RESTART_ERROR_MESSAGE,
	SCORE_START_NUMBER,
	RESULT_MESSAGES,
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
		this.printMessage(START_MESSAGE);
		this.playMainGame();
		this.printMessage(GAME_RESTART_MESSAGE);
		this.checkRestart();
	}

	playMainGame() {
		this.initializeGame();
		while (this.gameEnd === false) {
			const resultMessage = this.getCompareResult(this.computerNumber, this.getUserNumber());
			this.printMessage(resultMessage);
			if (resultMessage === THREE_STRIKE_MESSAGE) {
				this.gameEnd = true;
				this.printMessage(GAME_END_MESSAGE);
			}
		}
	}

	checkRestart() {
		MissionUtils.Console.readLine(GAME_RESTART_MESSAGE, answer => {
			if (!(answer === RESTART_ANSWER.YES || answer === RESTART_ANSWER.NO)) {
				throw new Error(RESTART_ERROR_MESSAGE);
			}
			if (answer === RESTART_ANSWER.YES) {
				this.printMessage(answer);
				this.playMainGame();
				return;
			}
			MissionUtils.Console.close();
		});
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
		MissionUtils.Console.readLine(INPUT_USER_NUM_MESSAGE, answer => {
			this.printMessage(USER_INPUT_FEEDBACK_MESSAGE(answer));
			if (!this.validateUserNumber(answer)) {
				throw new Error(ERROR_MESSAGE);
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
		const computerArray = [...computerNumber];
		const userArray = [...userNumber];
		const ballAndStrikeScore = this.getBallAndStrikeScore(computerArray, userArray);
		const strikeScore = this.getStrikeScore(computerArray, userArray);
		const ballScore = ballAndStrikeScore - strikeScore;
		return this.getResultString(strikeScore, ballScore);
	}

	getBallAndStrikeScore(computerArray, userArray) {
		let ballAndStrikeScore = SCORE_START_NUMBER;
		computerArray.forEach(number => {
			if (userArray.includes(number)) {
				ballAndStrikeScore += 1;
			}
		});
		return ballAndStrikeScore;
	}

	getStrikeScore(computerArray, userArray) {
		let strikeScore = SCORE_START_NUMBER;
		computerArray.forEach((number, index) => {
			if (number === userArray[index]) {
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
