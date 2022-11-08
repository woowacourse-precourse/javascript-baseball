const MissionUtils = require('@woowacourse/mission-utils');
class App {
	play() {
		this.runGame();
	}

	runGame() {}

	async process() {
		const RANDOMNUMBER = this.getRandomNumber();
		let message = '';
		do {
			const ANSWER = await this.inputAnswer();
			message = this.printResult(RANDOMNUMBER, ANSWER);
		} while (this.isNotThreeStrike(message));
	}

	getRandomNumber() {
		let randomNumber = '';

		for (let digit = 1; digit <= 3; digit++) {
			const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
			randomNumber.includes(NUMBER) ? digit-- : (randomNumber += NUMBER);
		}

		return randomNumber.split('');
	}

	async inputAnswer() {
		const answer = await new Promise((resolve, reject) => {
			try {
				MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
					const input = number.toString().split('');
					this.validateAnswer(input);
					resolve(input);
				});
			} catch (error) {
				reject(error);
			}
		});

		return answer;
	}

	validateAnswer(answer) {
		if (answer.length !== 3) throw new Error('세자리 수가 아닙니다.');
		if ([...new Set(answer)].length !== 3) throw new Error('같은 숫자를 입력하셨습니다.');
		if (/[^1-9]/g.test(answer.join(''))) throw new Error('1~9 이외의 숫자 혹은 문자를 입력하셨습니다.');
	}

	printResult(RANDOMNUMBER, ANSWER) {
		let resultMessage = [];
		const RESULT = this.getResult(RANDOMNUMBER, ANSWER);

		if (RESULT.ball > 0) resultMessage.push(`${RESULT.ball}볼`);
		if (RESULT.strike > 0) resultMessage.push(`${RESULT.strike}스트라이크`);
		if (RESULT.ball + RESULT.strike === 0) resultMessage.push('낫싱');

		resultMessage = resultMessage.join(' ');
		MissionUtils.Console.print(resultMessage);
		return resultMessage;
	}

	getResult() {}

	isNotThreeStrike() {}

	validateOption(option) {
		if (/[^1-2]/g.test(option)) throw new Error('옵션에 없는 값을 입력하셨습니다.');
	}
}

module.exports = App;
