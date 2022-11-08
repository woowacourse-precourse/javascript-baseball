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
      const pickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswerArr.includes(pickNumber)) {
        computerAnswerArr.push(pickNumber);
      }
    }
    this.computerAnswerArr = computerAnswerArr;
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine(PROGRESS_MESSAGE.INPUT_ANSWER, (value) => {
      this.checkValidity(value);
      this.userScore();
    });
  }

  checkValidity(value) {
    let userAnswerArr = value.split('');
    if (userAnswerArr.length !== 3) throw new Error(ERROR_MESSAGE.INPUT_THREE_NUMBER);
    userAnswerArr.forEach(value => {
      if (isNaN(Number(value)) === true) {
        throw new Error(ERROR_MESSAGE.INPUT_TYPE_NUMBER);
      }
      if (Number(value) > 9 || Number(value) < 1) {
        throw new Error(ERROR_MESSAGE.INPUT_RANGE_NUMBER);
      }
    });
    const inputValueSet = new Set([...userAnswerArr]);
    if (inputValueSet.size !== 3) {
      throw new Error(ERROR_MESSAGE.INPUT_UNIQUE_NUMBER);
    }
    this.userAnswerArr = userAnswerArr.map((pickNum) => +pickNum);
  }

  userScore() {
    let strikeCount = 0;
    let ballCount = 0;
    this.computerAnswerArr.forEach((computerAnswerItem, index) => {
      if (computerAnswerItem === this.userAnswerArr[index]) {
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
    MissionUtils.Console.readLine(PROGRESS_MESSAGE.INPUT_RESTART, (inputNum) => {
      if (Number(inputNum) === 1) {
        MissionUtils.Console.close();
        this.startGame();
      }
      if (Number(inputNum) === 2) {
        MissionUtils.Console.close();
        MissionUtils.Console.print(PROGRESS_MESSAGE.GAME_OVER);
      }
      if (Number(inputNum) !== 1 && Number(inputNum) !== 2) {
        throw new Error(ERROR_MESSAGE.INPUT_RESTART_NUMBER);
      }
    });
  }
}

module.exports = App;
