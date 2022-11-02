const { Console, Random } = require('@woowacourse/mission-utils');
const printStartMessage = require('./funcs/printStartMessage');
const isInputValid = require('./funcs/isInputValid');
const createAnswerNumbers = require('./funcs/createAnswerNumbers');

class App {
	constructor() {
		this._answerNumbers = null;
		this._inputNumbers = null;
	}
	play() {
		printStartMessage();
		this.setAnswerNumbers();
		this.getUserInput();
	}

	setAnswerNumbers() {
		this._answerNumbers = createAnswerNumbers();
	}

	getUserInput() {
		Console.readLine('숫자를 입력해주세요 : ', input => {
			console.log(input);
			if (!isInputValid(input)) throw new Error('입력값이 잘못 되었습니다.');
		});
	}
}

const app = new App();

app.play();

module.exports = App;
