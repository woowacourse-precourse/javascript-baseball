const { Console, Random } = require('@woowacourse/mission-utils');

class App {
	constructor() {
		this._answerNumbers = null;
	}
	play() {
		this.printStartMessage();
		this.createAnswerNumbers();
		this.getUserInput();
	}
	printStartMessage() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}
	createAnswerNumbers() {
		this._answerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
	}
	getUserInput() {
		Console.readLine('숫자를 입력해주세요 : ', input => {
			// 입력 받은 값을 토대로 다른 작업 진행
		});
	}
}

const app = new App();

app.play();

module.exports = App;
