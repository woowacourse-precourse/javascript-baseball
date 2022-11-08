const { Console, Random } = require('@woowacourse/mission-utils');

class App {
	play(mode = 'first') {
		if (mode === 'first') {
			Console.print('숫자 야구 게임을 시작합니다.');
		}
		const computerNum = this.chooseTargetNumber();
		this.guessTarget(computerNum);
	}

	chooseTargetNumber() {
		const targetNum = [];
		while (targetNum.length < 3) {
			const number = Random.pickNumberInRange(1, 9);
			if (!targetNum.includes(number)) {
				targetNum.push(number);
			}
		}

		return targetNum.join('');
	}

	generateResult(num1, num2) {
		const result = {};

		[...String(num1)].map((digit, idx) => {
			if (String(num2)[idx] === digit) {
				result['스트라이크'] ? result['스트라이크']++ : (result['스트라이크'] = 1);
			} else if (String(num2).includes(digit)) {
				result['볼'] ? result['볼']++ : (result['볼'] = 1);
			}
		});

		let result_message = '';

		if (!Object.keys(result).length) {
			result_message = '낫싱';
		} else {
			if (result['볼']) {
				result_message += `${result['볼']}볼 `;
			}
			if (result['스트라이크']) {
				result_message += `${result['스트라이크']}스트라이크`;
			}
		}

		Console.print(result_message);

		return result;
	}

	guessTarget(target) {
		Console.readLine('숫자를 입력해주세요 : ', userInput => {
			this.checkValidity(userInput);

			const result = this.generateResult(target, userInput);

			if (result['스트라이크'] === 3) {
				Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
				this.restart();
			}

			this.guessTarget(target);
		});
	}

	restart() {
		Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', userInput => {
			if (userInput === '1') {
				this.play('replay');
			} else if (userInput === '2') {
				Console.close();
			} else {
				throw new Error('1과 2 중 하나만 입력해주세요.');
			}
		});
	}

	checkValidity(num) {
		if (isNaN(Number(num))) {
			throw new Error('숫자만 입력해주세요');
		}
		if (num.length !== 3) {
			throw new Error('3자리 숫자를 입력해주세요');
		}
		if (this.checkDuplicates(num)) {
			throw new Error('중복된 숫자가 있습니다.');
		}
	}

	checkDuplicates(num) {
		let flag = false;

		[...String(num)].map((char, idx) => {
			if (
				String(num)
					.slice(idx + 1)
					.includes(char)
			) {
				flag = true;
			}
		});

		return flag;
	}
}

module.exports = App;
