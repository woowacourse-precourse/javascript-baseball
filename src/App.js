const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  makeRandomNumbers() {
    const computerNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerNumberArray = computerNumber;
  }

  getUserNumbers() {
    Console.readLine('숫자를 입력해주세요 :', (userNumber) => {
      if (!this.checkValidation(userNumber))
        throw new Error('형식에 맞는 숫자를 입력해주세요.');

      this.changeUserNumbersToArray(userNumber);
      this.getScore(this.computerNumberArray, this.userNumberArray);
      this.getScoreResult(this.score);
      this.printScoreResult(this.scoreResult);
    });
  }

  changeUserNumbersToArray(userNumber) {
    const changeNumber = (string) => Number(string);
    this.userNumberArray = Array.from(userNumber, changeNumber);
  }

  checkValidation(userNumber) {
    if (
      !this.checkTypeNumber(userNumber) ||
      !this.checkLength(userNumber) ||
      !this.checkRange(userNumber) ||
      !this.checkDuplication(userNumber)
    )
      return false;
    return true;
  }

  checkTypeNumber(userNumber) {
    for (let i = 0; i < 3; i++) {
      return !isNaN(Number(userNumber[i]));
    }
  }

  checkLength(userNumber) {
    return userNumber.length === 3;
  }

  checkRange(userNumber) {
    return !userNumber.includes('0');
  }

  checkDuplication(userNumber) {
    const splitNumber = userNumber.split('');
    return new Set(splitNumber).size === 3;
  }

  getScore(computerNumber, userNumber) {
    const score = [0, 0];

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) score[0]++;
      else if (computerNumber.includes(userNumber[i])) score[1]++;
    }

    this.score = score;
  }

  getScoreResult(score) {
    let scoreResult = '';

    if (score[0] === 0 && score[1] === 0) scoreResult = '낫싱';
    if (score[0] === 0 && score[1] > 0) scoreResult = `${score[1]}볼`;
    if (score[0] > 0 && score[1] === 0) scoreResult = `${score[0]}스트라이크`;
    if (score[0] > 0 && score[1] > 0)
      scoreResult = `${score[1]}볼 ${score[0]}스트라이크`;

    this.scoreResult = scoreResult;
  }

  printScoreResult(scoreResult) {
    Console.print(scoreResult);
    if (scoreResult === '3스트라이크') {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.replay();
    }
    this.getUserNumbers();
  }

  replay() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer === '1') {
          this.play();
          return;
        }
        if (answer === '2') {
          Console.close();
          return;
        }
        throw new Error('1 또는 2만 입력해주세요.');
      }
    );
  }

  play() {
    this.makeRandomNumbers();
    this.getUserNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
