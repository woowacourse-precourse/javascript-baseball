const MissionUtils = require('@woowacourse/mission-utils');
const {
  INPUT_MESSAGES,
  ERROR_MESSAGES,
  OUTPUT_MESSAGES,
} = require('./utils/Constants');
const InputCheck = require('./utils/validates');

class App {

  play() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.GAME_START);
    const COMPUTER_NUMBER = this.computerRandomNumber();
    this.gameStart(COMPUTER_NUMBER)
  };

  computerRandomNumber() {
    let computerNumber = [];
    while (computerNumber.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(NUMBER)) {
        computerNumber.push(NUMBER);
      }
    }
    return computerNumber;
  };

  checkUserInput(userInput) {
    const inputCheck = new InputCheck;
    inputCheck.checkUserInputType(userInput);
    inputCheck.checkUserInputLength(userInput);
    inputCheck.checkUserInputIsDiff(userInput);
    inputCheck.checkUserInputNumberRange(userInput);
  };

  checkingScore(userInputNumber, computerNumber) {
    let score = [0, 0];
    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] == userInputNumber[i]) { // 스트라이크
        score[0] += 1;
      } else if (computerNumber.includes(Number(userInputNumber[i]))) { // 볼
        score[1] += 1;
      }
    }
    return score;
  };

  checkResultScore(score) {

    let answer = "";

    if (score[0] == 0 && score[1] == 0) {
      answer = "낫싱";
    } else if (score[0] > 0 && score[1] == 0) {
      answer = `${score[0]}스트라이크`;
    } else if (score[0] == 0 && score[1] > 0) {
      answer = `${score[1]}볼`;
    } else if (score[0] > 0 && score[1] > 0) {
      answer = `${score[1]}볼 ${score[0]}스트라이크`
    }
    return answer;
  };

  checkStrike(score) {
    if (score[0] == 3) {
      return true;
    } else {
      return false;
    }
  };

  gameStart(COMPUTER_NUMBER) {
    MissionUtils.Console.readLine(INPUT_MESSAGES.INPUT_NUMBER_MESSAGES, (input) => {

      let userInput = input.split('');

      this.checkUserInput(userInput);

      const SCORE = this.checkingScore(userInput, COMPUTER_NUMBER);
      const ANSWER = this.checkResultScore(SCORE);

      MissionUtils.Console.print(ANSWER);

      if (this.checkStrike(SCORE)) {
        MissionUtils.Console.print(OUTPUT_MESSAGES.GAME_OVER);
        this.gameRestart();
      } else {
        this.gameStart(COMPUTER_NUMBER);
      }
    });
  };

  gameRestart() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.RESTART_GAME_MESSAGES, (input) => {
      if (input == 1) {
        this.play();
      } else if (input == 2) {
        MissionUtils.Console.close();
      }
    });
  };

}

const app = new App();
app.play();

module.exports = App;
