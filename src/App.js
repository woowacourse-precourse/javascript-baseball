const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, NUMBERS, UNITS } = require('./constants');

class App {
	computerNumArr = [];

	play() {
		Console.print(MESSAGES.START);
		this.initGame();
		this.playGame();
	}

	initGame() {
		while (this.computerNumArr.length < 3) {
			let number = Random.pickNumberInRange(1, 9);
			if (!this.computerNumArr.includes(number))
				this.computerNumArr.push(number);
		}
		Console.print(this.computerNumArr);
	}

	playGame() {
		Console.readLine(
			MESSAGES.REQUIRE_USER_INPUT(NUMBERS.GAME_MAX),
			userAnswerStr => {
				if (this.#isValid(userAnswerStr)) {
					const resultMessage = this.#getResultMessage(
						this.computerNumArr,
						userAnswerStr
					);
					if (resultMessage === MESSAGES.THREE_STRIKE) {
						Console.print(MESSAGES.THREE_STRIKE);
						Console.close();
					} else {
						Console.print(resultMessage);
						this.playGame();
					}
				}
			}
		);
	}

	#isValid() {}
	#getResultMessage(computerNumArr, userAnswerStr) {
		let result = '';
		let [ball, strike] = [0, 0];

		userAnswerStr.split('').forEach((userAnswerStr, userAnswerIdx) => {
			computerNumArr.map((computerNum, computerNumIdx) => {
				if (computerNum === Number(userAnswerStr)) {
					ball++;
					if (computerNumIdx === userAnswerIdx) {
						strike++;
					}
				}
			});

			if (strike > 0 && ball > 0) {
				result = `${ball}${UNITS.BALL} ${strike}${UNITS.STRIKE}`;
			} else if (strike > 0) {
				result = `${strike}${UNITS.STRIKE}`;
			} else if (ball > 0) {
				result = `${ball}${UNITS.BALL}`;
			} else {
				result = UNITS.NOTHING;
			}
		});

		return result;
	}
}

module.exports = App;
