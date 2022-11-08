const MissionUtils = require("@woowacourse/mission-utils");
const { PROGRESS_MESSAGE, ERROR_MESSAGE } = require('./constants');

class App {
  play() {
    MissionUtils.Console.print(PROGRESS_MESSAGE.GAME_START);
    this.startGame();
  }

  startGame() {
    this.inputComputerAnswer();
    this.inputUserAnswer();
  }

  inputComputerAnswer() {
    const computerAnswerArr = [];
    while (computerAnswerArr.length < 3) {
      const randomPickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswerArr.includes(randomPickNumber)) {
        computerAnswerArr.push(randomPickNumber);
      }
    }
    this.computerAnswerArr = computerAnswerArr;
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine(PROGRESS_MESSAGE.INPUT_ANSWER, (useAnswer) => {
      this.checkUserAnswerValidity(useAnswer);
      this.userScore();
    });
  }

  checkUserAnswerValidity(useAnswer) {
    let userAnswerArr = useAnswer.split('');
    if (userAnswerArr.length !== 3) throw new Error(ERROR_MESSAGE.INPUT_THREE_NUMBER);
    userAnswerArr.forEach(useAnswerItem => {
      if (isNaN(Number(useAnswerItem)) === true) {
        throw new Error(ERROR_MESSAGE.INPUT_TYPE_NUMBER);
      }
      if (Number(useAnswerItem) > 9 || Number(useAnswerItem) < 1) {
        throw new Error(ERROR_MESSAGE.INPUT_RANGE_NUMBER);
      }
    });
    const inputValueSet = new Set([...userAnswerArr]);
    if (inputValueSet.size !== 3) {
      throw new Error(ERROR_MESSAGE.INPUT_UNIQUE_NUMBER);
    }
    this.userAnswerArr = userAnswerArr.map((useAnswerItem) => +useAnswerItem);
  }

  userScore() {
    let strikeCount = 0;
    let ballCount = 0;
    this.computerAnswerArr.forEach((computerAnswerItem, useAnswerItem) => {
      if (computerAnswerItem === this.userAnswerArr[useAnswerItem]) {
        strikeCount += 1;
      } else {
        if (this.userAnswerArr.includes(computerAnswerItem)) ballCount += 1;
      }
    })
    if (strikeCount === 3) this.gameResult('3스트라이크');
    if (strikeCount === 0 && ballCount === 0) this.gameResult('낫싱');
    if (strikeCount > 0 && ballCount > 0) this.gameResult(`${ballCount}볼 ${strikeCount}스트라이크`);
    if (strikeCount > 0 && ballCount === 0) this.gameResult(`${strikeCount}스트라이크`);
    if (ballCount > 0 && strikeCount === 0) this.gameResult(`${ballCount}볼`);
  }

  gameResult(score) {
    if (score === '3스트라이크') {
      MissionUtils.Console.print(score);
      MissionUtils.Console.print(PROGRESS_MESSAGE.CORRECT_ANSWER);
      this.restart();
    } else {
      MissionUtils.Console.print(score);
      this.inputUserAnswer();
    }
  }

  restart() {
    MissionUtils.Console.readLine(PROGRESS_MESSAGE.INPUT_RESTART, (inputValue) => {
      if (Number(inputValue) === 1) {
        MissionUtils.Console.close();
        this.startGame();
      }
      if (Number(inputValue) === 2) {
        MissionUtils.Console.close();
        MissionUtils.Console.print(PROGRESS_MESSAGE.GAME_OVER);
      }
      if (Number(inputValue) !== 1 && Number(inputValue) !== 2) {
        throw new Error(ERROR_MESSAGE.INPUT_RESTART_NUMBER);
      }
    });
  }
}

module.exports = App;
