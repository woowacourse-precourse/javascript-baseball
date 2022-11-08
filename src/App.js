const MissionUtils = require('@woowacourse/mission-utils');
class App {
	play() {
		this.runGame();
	}

	runGame() {
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

		do {
			this.process();
		} while (this.restartOrFinish());
		MissionUtils.Console.print('게임 종료');
		MissionUtils.Console.close();
	}

	process() {
		const RANDOMNUMBER = this.getRandomNumber();
		let message = '';

		do {
			const ANSWER = this.inputAnswer();
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

	inputAnswer() {
		let answer = '';
		MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
			const input = number.toString().split('');
			this.validateAnswer(input);
			answer = input;
		});
		MissionUtils.Console.close();

		return answer;
	}

	validateAnswer(answer) {
		if (/[^1-9]/g.test(answer.join(''))) throw new Error('1~9 이외의 숫자 혹은 문자를 입력하셨습니다.');
		if (answer.length !== 3) throw new Error('세자리 수가 아닙니다.');
		if ([...new Set(answer)].length !== 3) throw new Error('같은 숫자를 입력하셨습니다.');
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

	getResult(RANDOMNUMBER, ANSWER) {
		const RESULT = {
			ball: 0,
			strike: 0,
		};

		ANSWER.forEach((number, digit) => {
			if (RANDOMNUMBER.includes(number)) {
				RANDOMNUMBER[digit] === number ? RESULT.strike++ : RESULT.ball++;
			}
		});
		return RESULT;
	}

	isNotThreeStrike(resultMessage) {
		return resultMessage !== '3스트라이크' ? true : false;
	}

	restartOrFinish() {
		MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		let finish = '';
		MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (option) => {
			this.validateOption(option);
			finish = option;
		});
		MissionUtils.Console.close();

		return finish === '1' ? true : false;
	}

	validateOption(option) {
		if (/[^1-2]/g.test(option)) throw new Error('옵션에 없는 값을 입력하셨습니다.');
	}
}

// const app = new App();
// app.play();

module.exports = App;
