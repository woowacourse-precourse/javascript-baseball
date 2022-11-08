const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME_DIRECTION_MESSAGE, RESULT_MESSAGE, ERROR_MESSAGE } = require('./constants');
const { checkValidity } = require('./utils');

const { OPENING, INPUT, CORRECT_ANSWER, END } = GAME_DIRECTION_MESSAGE;
const { NOTHING, STRIKE, BALL } = RESULT_MESSAGE;
const { TYPE_CHECK, LENGTH_CHECK, DUPLICATE_CHECK, INPUT_CHECK } = ERROR_MESSAGE;

class App {
	play(mode = 'first') {
		if (mode === 'first') {
			Console.print(OPENING);
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
				result[STRIKE] ? result[STRIKE]++ : (result[STRIKE] = 1);
			} else if (String(num2).includes(digit)) {
				result[BALL] ? result[BALL]++ : (result[BALL] = 1);
			}
		});

		let result_message = '';

		if (!Object.keys(result).length) {
			result_message = NOTHING;
		} else {
			if (result[BALL]) {
				result_message += `${result[BALL]}${BALL} `;
			}
			if (result[STRIKE]) {
				result_message += result[STRIKE] + STRIKE;
			}
		}

		Console.print(result_message);

		return result;
	}

	guessTarget(target) {
		Console.readLine(INPUT, userInput => {
			checkValidity(userInput);

			const result = this.generateResult(target, userInput);

			if (result[STRIKE] === 3) {
				Console.print(CORRECT_ANSWER);
				this.restart();
			}

			this.guessTarget(target);
		});
	}

	restart() {
		Console.readLine(END, userInput => {
			if (userInput === '1') {
				this.play('replay');
			} else if (userInput === '2') {
				Console.close();
			} else {
				throw new Error(INPUT_CHECK);
			}
		});
	}
}

module.exports = App;
