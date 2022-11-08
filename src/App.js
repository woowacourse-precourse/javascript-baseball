const MissionUtils = require('@woowacourse/mission-utils');
class App {
	play() {
		this.runGame();
	}

	runGame() {}

	process() {}

	getRandomNumber() {}

	inputAnswer() {}

	validateAnswer(answer) {
		if (answer.length !== 3) throw new Error('세자리 수가 아닙니다.');
		if ([...new Set(answer)].length !== 3) throw new Error('같은 숫자를 입력하셨습니다.');
		if (/[^1-9]/g.test(answer.join(''))) throw new Error('1~9 이외의 숫자 혹은 문자를 입력하셨습니다.');
	}

	printResult() {}

	getResult() {}

	isNotThreeStrike() {}

	validateOption() {}
}

module.exports = App;
