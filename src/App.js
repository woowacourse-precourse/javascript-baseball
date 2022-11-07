const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() { }

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

  checkUserInputType(userInput) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(Number(userInput[i]))) {
        throw new Error('숫자로 입력해주세요.');
      }
    }
  };

  checkUserInputLength(userInput) {
    if (userInput.length !== 3) {
      throw new Error('3자리로 입력해주세요.');
    }
  };

  checkUserInputIsDiff(userInput) {
    let uniqueNumber = new Set(userInput);
    if (uniqueNumber.size !== userInput.length) {
      throw new Error('중복없이 숫자를 입력해주세요.');
    }
  };

  checkUserInputNumberRange(userInput) {
    for (let i = 0; i < 3; i++) {
      if (Number[userInput[i]] > 1 || Number[userInput[i]] < 9) {
        throw new Error('1 ~ 9 사이의 숫자를 입력해주세요.');
      }
    }
  };

  checkUserInput(userInput) {
    this.checkUserInputType(userInput);
    this.checkUserInputLength(userInput);
    this.checkUserInputIsDiff(userInput);
    this.checkUserInputNumberRange(userInput);
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
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (input) => {

      let userInput = input.split('');

      this.checkUserInput(userInput);

      const SCORE = this.checkingScore(userInput, COMPUTER_NUMBER);
      const ANSWER = this.checkResultScore(SCORE);

      MissionUtils.Console.print(ANSWER);

      if (this.checkStrike(SCORE)) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.gameRestart();
      } else {
        this.gameStart(COMPUTER_NUMBER);
      }
    });
  };

  gameRestart() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
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
