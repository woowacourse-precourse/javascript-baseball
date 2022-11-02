const { Console, Random } = require('@woowacourse/mission-utils');
const isInputValid = require('./isInputValid');

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
			console.log(isInputValid(input));
		});
	}
}

const app = new App();

app.play();

module.exports = App;
