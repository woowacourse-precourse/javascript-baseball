const { Console, Random } = require('@woowacourse/mission-utils');

class App {
	constructor() {
		this._answerNumbers = null;
	}
	play() {
		this.printStartMessage();
		this.createAnswerNumbers();
	}
	printStartMessage() {
		Console.print('숫자 야구 게임을 시작합니다.');
		Console.close();
	}
}

const app = new App();

app.play();

module.exports = App;
