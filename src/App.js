const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getComputerNumbers();
  }

  getComputerNumbers() {
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.getUserNumbers(computerNumbers);
  }

  getUserNumbers(computerNumbers) {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (answer) => {
      this.getCount(answer, computerNumbers);
    });
  }

  getStrikeCount(userNumArr, computerNumArr) {
    return userNumArr.reduce((acc, num, i) => {
      if (num === computerNumArr[i]) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  getBallCount(userNumArr, computerNumArr) {
    return userNumArr.reduce((acc, num, i) => {
      if (computerNumArr.includes(num) === true && num !== computerNumArr[i]) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  getCount(userNumbers, computerNumbers) {
    const userNumArr = String(userNumbers).split('');
    const computerNumArr = computerNumbers.map(String);
    const strikeCount = this.getStrikeCount(userNumArr, computerNumArr);
    const ballCount = this.getBallCount(userNumArr, computerNumArr);
    this.getResult(strikeCount, ballCount, computerNumbers);
  }

  getResult(strike, ball, computerNumbers) {
    let result = '';
    if (strike === 3) {
      result = 'answer';
    } else if (strike === 0 && ball === 0) {
      result = 'nothing';
    } else if (strike === 0 && ball !== 0) {
      result = `${ball}볼`;
    } else if (strike !== 0 && ball === 0) {
      result = `${strike}스트라이크`;
    } else if (strike !== 0 && ball !== 0) {
      result = `${ball}볼 ${strike}스트라이크`;
    }
  }
}

module.exports = App;
