const MissionUtils = require('@woowacourse/mission-utils');

const START_MESSAGE = `숫자 야구 게임을 시작합니다.`;
const INPUT_USER_NUM_MESSAGE = '숫자를 입력하세요';
const ERROR_MESSAGE = '알맞은 숫자를 입력하지않아 프로그램을 종료합니다';
const USER_INPUT_FEEDBACK_MESSAGE = answer => `숫자를 입력하세요 : ${answer}`;
const NUMBER_RANGE = {
	MIN: 1,
	MAX: 9,
};
const NUMBER_LENGTH = 3;
const SHOULD_NOT_INCLUDE_NUMBER = '0';

class App {
	constructor() {
		this.computerNumber = '';
		this.userNumber = '';
	}

	play() {
		this.printMessage(START_MESSAGE);
		this.computerNumber = this.getComputerNumber();
		this.userNumber = this.getUserNumber();
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
}

module.exports = App;
