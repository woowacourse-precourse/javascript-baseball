const MissionUtils = require('@woowacourse/mission-utils');

const START_MESSAGE = `숫자 야구 게임을 시작합니다.`;

class App {
	play() {
		this.printMessage(START_MESSAGE);
	}

	printMessage(message) {
		MissionUtils.Console.print(message);
	}
}

module.exports = App;
