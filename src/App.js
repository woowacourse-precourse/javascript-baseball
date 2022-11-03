const { Console } = require('@woowacourse/mission-utils');
const printStartMessage = require('./funcs/printStartMessage');
const isInputValid = require('./funcs/isInputValid');
const createAnswerNumbers = require('./funcs/createAnswerNumbers');
const compareInputNumbers = require('./funcs/compareInputNumbers');
const printCompareResult = require('./funcs/printCompareResult');

class App {
	constructor() {
		this._answerNumbers = null;
		this._isGameOver = false;
	}
	play() {
		printStartMessage();
		this.setAnswerNumbers();
		this.getUserInput();
	}

	setAnswerNumbers() {
		this._answerNumbers = createAnswerNumbers();
	}

	getAnswerNumbers() {
		return this._answerNumbers;
	}

	setIsGameOver() {
		this._isGameOver = !this._isGameOver;
	}

	getIsGameOver() {
		return this._isGameOver;
	}

	getUserInput() {
		Console.readLine('숫자를 입력해주세요 : ', input => {
			if (!isInputValid(input)) throw new Error('입력값이 잘못 되었습니다.');
			const { strike, ball } = compareInputNumbers(this.getAnswerNumbers(), input);
			printCompareResult(strike, ball);
			if (strike === 3) this.setIsGameOver();
			if (this.getIsGameOver()) {
				Console.close();
				return;
			}
			this.getUserInput();
		});
	}
}

const app = new App();

app.play();

module.exports = App;
