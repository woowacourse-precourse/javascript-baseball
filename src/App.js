const MissionUtils = require('@woowacourse/mission-utils');
const {
	START_MESSAGE,
	NUMBER_LENGTH,
	NUMBER_RANGE,
	ERROR_MESSAGE,
	INPUT_USER_NUM_MESSAGE,
	SHOULD_NOT_INCLUDE_NUMBER,
	USER_INPUT_FEEDBACK_MESSAGE,
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

	playMainLogic() {
		this.initializeGame();
		while (this.gameEnd === false) {
			const resultMessage = this.getCompareResult(this.computerNumber, this.getUserNumber());
			this.printMessage(resultMessage);
			if (resultMessage === '3스트라이크') {
				this.gameEnd = true;
				this.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
			}
		}
	}

	play() {
		this.printMessage(START_MESSAGE);
		this.playMainLogic();
		this.printMessage('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
		this.checkRestart();
	}

	checkRestart() {
		MissionUtils.Console.readLine(
			'게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
			answer => {
				if (!(answer === '1' || answer === '2')) {
					throw new Error('1또는 2를 입력하세요');
				}
				if (answer === '1') {
					this.printMessage(answer);
					this.playMainLogic();
					return;
				}
				MissionUtils.Console.close();
			},
		);
	}

	printMessage(message) {
		MissionUtils.Console.print(message);
	}

	getComputerNumber() {
		const numberSet = new Set();
		while (numberSet.size !== NUMBER_LENGTH) {
			numberSet.add(MissionUtils.Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX));
		}
		return [...numberSet].join('');
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
		let ballAndStrikeScore = 0;
		computerArray.forEach(number => {
			if (userArray.includes(number)) {
				ballAndStrikeScore += 1;
			}
		});
		return ballAndStrikeScore;
	}

	getStrikeScore(computerArray, userArray) {
		let strikeScore = 0;
		computerArray.forEach((number, index) => {
			if (number === userArray[index]) {
				strikeScore += 1;
			}
		});
		return strikeScore;
	}

	getResultString(strikeScore, ballScore) {
		if (strikeScore + ballScore === 0) {
			return '낫싱';
		}
		if (strikeScore === 0) {
			return `${ballScore}볼`;
		}
		if (ballScore === 0) {
			return `${strikeScore}스트라이크`;
		}
		return `${ballScore}볼 ${strikeScore}스트라이크`;
	}
}

module.exports = App;
