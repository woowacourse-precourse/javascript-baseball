const { Random, Console } = require("@woowacourse/mission-utils");
const { ballStrike } = require("./BallStrike");
const { COMMAND, THREE_DIGISTS, COUNT, GAME_SENTENCE } = require("./constants");
const { removeListDuplication, throwErrorWrongInputValue } = require("./utils");
const Validation = require("./Validation");

class BaseBallGame {
  answer;
  playerInputValue;

  start() {
    this.createAnswer();
    this.getPlayerInputValue();
  }

  createAnswer() {
    const randomUniqueNumberList = [];
    while (randomUniqueNumberList.length < THREE_DIGISTS) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!randomUniqueNumberList.includes(randomNumber)) {
        randomUniqueNumberList.push(randomNumber);
      }
    }
    this.answer = Number(randomUniqueNumberList.join(""));
  }

  getPlayerInputValue() {
    Console.readLine(GAME_SENTENCE.PLAYER_INPUT, (playerInputValue) => {
      console.log(this.answer, "정답");
      console.log(playerInputValue, "플레이어 입력값");
      if (Validation.passAllValidationChecks(playerInputValue)) {
        this.playerInputValue = Number(playerInputValue);
      }
      this.compareAnswers();
      this.getPlayerInputValue();
    });
  }

  restart() {
    Console.readLine(GAME_SENTENCE.RESTART, (number) => {
      if (Number(number) === COMMAND.RESTART) {
        this.start();
        return;
      }
      if (Number(number) === COMMAND.END) {
        Console.close();
        return;
      }
      throwErrorWrongInputValue();
    });
  }

  compareAnswers() {
    const answerNumbers = String(this.answer).split("");
    const playerNumbers = String(this.playerInputValue).split("");
    const allNumbers = [...answerNumbers, ...playerNumbers];

    if (this.answer === this.playerInputValue) {
      Console.print(COUNT.STRIKE(3));
      Console.print(GAME_SENTENCE.END);
      this.restart();
      return;
    }
    if (removeListDuplication(allNumbers).length === THREE_DIGISTS * 2) {
      Console.print(COUNT.NOTHING);
      return;
    }

    ballStrike.count = { playerNumbers, answerNumbers };
    ballStrike.printResultSentence();
  }
}

const baseballGame = new BaseBallGame();
module.exports = baseballGame;
