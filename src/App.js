const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.ANSWER_NUMBER = [];
    this.USER_NUMBER = [];
    this.strikeCount = 0;
    this.ballCount = 0;
    this.playFirstTime = true;
  }

  play() {
    if (this.playFirstTime) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.createAnswerNumber();
    this.getUserNumber();
  }

  createAnswerNumber() {
    this.ANSWER_NUMBER = [];
    while (this.ANSWER_NUMBER.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.ANSWER_NUMBER.includes(randomNumber)) {
        this.ANSWER_NUMBER.push(randomNumber);
      }
    }
  }

  getUserNumber() {
    this.USER_NUMBER = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', userinput => {
      this.USER_NUMBER = userinput.split('').map(Number);
      this.compareNumbers(this.USER_NUMBER);
    });
  }

  compareNumbers(number) {
    this.strikeCount = 0;
    this.ballCount = 0;
    const user = number;
    const computer = this.ANSWER_NUMBER;

    for (let i = 0; i < 3; i++) {
      if (computer.indexOf(user[i]) !== -1 && user[i] === computer[i]) {
        this.strikeCount += 1;
      } else if (computer.indexOf(user[i]) !== -1) {
        this.ballCount += 1;
      }
    }
  }

  threeStrikeCheck() {
    if (this.strikeCount === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
    return false;
  }

  nothingCheck() {
    if (this.strikeCount === 0 && this.ballCount === 0) {
      MissionUtils.Console.print('낫싱');
    }
    return false;
  }

  ballCheck() {
    if (this.strikeCount === 0 && this.ballCount !== 0) {
      MissionUtils.Console.print(`${this.ballCount}볼`);
    }
    return false;
  }

  strikeCheck() {
    if (
      this.strikeCount !== 0 &&
      this.ballCount === 0 &&
      this.strikeCount !== 3
    ) {
      MissionUtils.Console.print(`${this.strikeCount}스트라이크`);
    }
    return false;
  }
}

module.exports = App;
