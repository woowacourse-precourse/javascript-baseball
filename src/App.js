const { Console } = require('@woowacourse/mission-utils');
const printStartMessage = require('./funcs/printStartMessage');
const isInputValid = require('./funcs/isInputValid');
const createAnswerNumbers = require('./funcs/createAnswerNumbers');
const compareInputNumbers = require('./funcs/compareInputNumbers');

class App {
	constructor() {
		this._answerNumbers = null;
	}
	play() {
		printStartMessage();
		this.setAnswerNumbers();
		console.log(this._answerNumbers);
		this.getUserInput();
	}

	setAnswerNumbers() {
		this._answerNumbers = createAnswerNumbers();
	}

	getAnswerNumbers() {
		return this._answerNumbers;
	}

	getUserInput() {
		Console.readLine('숫자를 입력해주세요 : ', input => {
			if (!isInputValid(input)) throw new Error('입력값이 잘못 되었습니다.');
			const { strike, ball } = compareInputNumbers(this.getAnswerNumbers(), input);
			console.log(this.getAnswerNumbers(), strike, ball);
		});
	}
}

const app = new App();

app.play();

module.exports = App;
