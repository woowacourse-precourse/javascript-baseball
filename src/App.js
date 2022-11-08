const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, NUMBERS, UNITS, REGEX, CHOICE } = require('./constants');

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
		// Console.print(this.computerNumArr);
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
						this.askToReplay();
					} else {
						Console.print(resultMessage);
						this.playGame();
					}
				}
			}
		);
	}

	#isValid(userAnswerStr) {
		const answer = userAnswerStr.replace(REGEX.SPACE, '');
		const length = answer.length;

		if (length >= 4) throw new Error(MESSAGES.INVALID_LENGTH);

		if (isNaN(answer)) throw new Error(MESSAGES.NOT_A_NUMBER);

		return true;
	}

	#isValidChoice(playerChoice) {
		if (!REGEX.CHOICE.test(playerChoice)) {
			throw Error(MESSAGES.FORMAT_ERROR_CHOICE);
		}
	}
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

	askToReplay() {
		Console.readLine(MESSAGES.ASK_RESTART, playerChoice => {
			this.#isValidChoice(playerChoice);

			if (playerChoice === CHOICE.PLAY_AGAIN) {
				this.initGame();
				this.playGame();
			} else if (playerChoice === CHOICE.EXIT) {
				Console.close();
			} else {
				throw Error(MESSAGES.FORMAT_ERROR_CHOICE);
			}
		});
	}
}

module.exports = App;
