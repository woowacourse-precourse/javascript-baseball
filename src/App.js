const { Console } = require('@woowacourse/mission-utils');
const printStartMessage = require('./funcs/printStartMessage');
const isInputValid = require('./funcs/isInputValid');
const createAnswerNumbers = require('./funcs/createAnswerNumbers');
const compareInputNumbers = require('./funcs/compareInputNumbers');
const printCompareResult = require('./funcs/printCompareResult');
const printEndMessage = require('./funcs/printEndMessage');
const printNewGameMessage = require('./funcs/printNewGameMessage');

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
		console.log(this._answerNumbers);
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
				printEndMessage();
				printNewGameMessage();
				this.getNewGameInput();
				return;
			}
			this.getUserInput();
		});
	}

	getNewGameInput() {
		Console.readLine('', input => {
			if (input !== '1' && input !== '2') throw new Error('입력값이 잘못 되었습니다.');
			if (input === '1') {
				this.setAnswerNumbers();
				this.setIsGameOver();
				this.getUserInput();
			}
			if (input === '2') {
				Console.close();
				return;
			}
		});
	}
}

const app = new App();

app.play();

module.exports = App;
