class App {
	constructor() {
		this.MissionUtils = require('@woowacourse/mission-utils');
		this.Console = this.MissionUtils.Console;
		this.Random = this.MissionUtils.Random;
	}
	play() {
		this.start();
	}
	start() {
		this.Console.print('숫자 야구 게임을 시작합니다.');
		this.computerAnswer = this.getComputerAnswer();
		this.getPlayerAnswer();
	}
	getPlayerAnswer() {
		this.Console.readLine('숫자를 입력해주세요 : ', (playerAnswer) => {
			this.playerAnswer = playerAnswer;
			this.validatePlayerAnswer();
		});
	}
	validatePlayerAnswer() {
		const arr = this.playerAnswer.split('');
		if (arr.length !== 3) throw new Error('Invalid Player Answer');
		if (new Set(arr).size !== 3) throw new Error('Invalid Player Answer');
		arr.forEach((v) => {
			if (isNaN(v)) throw new Error('Invalid Player Answer');
			if (!Number(v)) throw new Error('Invalid Player Answer');
		});
	}
	getComputerAnswer() {
		const computer = [];
		while (computer.length < 3) {
			const number = this.Random.pickNumberInRange(1, 9);
			if (!computer.includes(number)) {
				computer.push(number);
			}
		}
		return computer.join('');
	}
}

module.exports = App;
