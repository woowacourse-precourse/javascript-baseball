const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, NUMBERS, UNITS, REGEX, CHOICE } = require('./constants');

class App {
	computerNumArr = [];

	play() {
		Console.print(MESSAGES.START);
		this.#initGame();
		this.#playGame();
	}

	#initGame() {
		this.computerNumArr = [];
		
		while (this.computerNumArr.length < 3) {
			let number = Random.pickNumberInRange(1, 9);
			if (!this.computerNumArr.includes(number))
				this.computerNumArr.push(number);
		}
	}

	#playGame() {
		Console.readLine(
			MESSAGES.REQUIRE_USER_INPUT(NUMBERS.GAME_MAX),
			userAnswerStr => {
				this.#isValid(userAnswerStr);
				 
				const [ball,strike] = this.#compareComputerWithUser(
					this.computerNumArr,
					userAnswerStr
				);
				const resultMessage = this.#convertScoreToMessage([ball,strike])

				this.#showResultMessage(resultMessage)

			}
		);
	}

	#isValid(userAnswerStr) {
		const answer = userAnswerStr.replace(REGEX.SPACE, '');
		const length = answer.length;
		const set = new Set()
		userAnswerStr.replace(REGEX.SPACE, '').forEach(num => set.add(num))

		if (length >= 4) throw new Error(MESSAGES.INVALID_LENGTH);

		if (isNaN(answer)) throw new Error(MESSAGES.NOT_A_NUMBER);
		
		if ([...set]!==[...answer]) throw new Error(MESSAGES.DUPLICATED_NUM);

		return true;
	}

	#isValidChoice(playerChoice) {
		if (!REGEX.CHOICE.test(playerChoice)) {
			Console.print(MESSAGES.FORMAT_ERROR_CHOICE)
			throw Error(MESSAGES.FORMAT_ERROR_CHOICE);
		}
	}

	#compareComputerWithUser(computerNumArr, userAnswerStr) {
		let [ball, strike] = [0, 0];

		userAnswerStr.split('').forEach((userAnswerStr, userAnswerIdx) => {
			this.#isValid(userAnswerStr);

			computerNumArr.map((computerNum, computerNumIdx) => {
				if (computerNum === Number(userAnswerStr) && computerNumIdx === userAnswerIdx ) {strike++; return;}
				if(computerNum === Number(userAnswerStr)) ball++;
				}
			);
			
		});

		return [ball,strike];
	}
	
	#convertScoreToMessage ([ball, strike]){
		let resultMessage = '';

		if (strike > 0 && ball > 0) {
			result = `${ball}${UNITS.BALL} ${strike}${UNITS.STRIKE}`;
		} else if (strike > 0) {
			result = `${strike}${UNITS.STRIKE}`;
		} else if (ball > 0) {
			result = `${ball}${UNITS.BALL}`;
		} else {
			result = UNITS.NOTHING;
		}

		return resultMessage;
	}

	#showResultMessage(resultMessage) {
		if (resultMessage === MESSAGES.THREE_STRIKE) {
			Console.print(MESSAGES.THREE_STRIKE);
			console.print(MESSAGES.END(3))
			this.#askToReplay();
		} else {
			Console.print(resultMessage);
			this.#playGame();
		}
	}

	#askToReplay() {
		Console.readLine(MESSAGES.ASK_RESTART, playerChoice => {
			this.#isValidChoice(playerChoice);

			if (playerChoice === CHOICE.PLAY_AGAIN) {
				this.initGame();
				this.#playGame();
			} else if (playerChoice === CHOICE.EXIT) {
				Console.print(MESSAGES.END_GAME)
				Console.close();
			} else {
				Console.print(MESSAGES.FORMAT_ERROR_CHOICE)
				throw Error(MESSAGES.FORMAT_ERROR_CHOICE);
			}
		});
	}
}

const app = new App()
app.play()
module.exports = App;
