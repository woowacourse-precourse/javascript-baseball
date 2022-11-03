const MissionUtils = require('@woowacourse/mission-utils');

const START_MESSAGE = `숫자 야구 게임을 시작합니다.`;
const RANDOM_NUM_RANGE = {
	MIN: 1,
	MAX: 9,
};
const RANDOM_NUM_LENGTH = 3;

class App {
	constructor() {
		this.computerNumber = '';
	}

	play() {
		this.printMessage(START_MESSAGE);
		this.computerNumber = this.getComputerNumber();
	}

	printMessage(message) {
		MissionUtils.Console.print(message);
	}

	getComputerNumber() {
		const numberSet = new Set();
		while (numberSet.size !== RANDOM_NUM_LENGTH) {
			numberSet.add(
				MissionUtils.Random.pickNumberInRange(RANDOM_NUM_RANGE.MIN, RANDOM_NUM_RANGE.MAX),
			);
		}
		return [...numberSet].join('');
	}
}

module.exports = App;
