const MissionUtils = require('@woowacourse/mission-utils');

const MAX_LENGTH = 3;

class App {
  constructor() {
    this.userNumber = [];
    this.computerNumber = [];
    this.countStrike = 0;
    this.countBall = 0;
    this.gameover = false;
  }

  isNumberValidated(input) {
    if (isNaN(input)) return false;
    else if (input.length !== MAX_LENGTH) return false;
    else return true;
  }

  createComputerNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < MAX_LENGTH) {
      this.computerNumber.push(MissionUtils.Random.pickNumberInRange(1, 9));
    }
  }

  createUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.userNumber = input.split('').map(item => parseInt(item));
    })
  }

  count() {
    for (let i = 0; i < 3; i++) {
      this.checkMatch(this.userNumber[i], this.computerNumber[i])
    }
  }

  checkMatch(userNumber, computerNumber) {
    if (userNumber === computerNumber) this.countStrike++;
    else if (this.computerNumber.indexOf(userNumber) !== -1) this.countBall++;
  }

  printCount() {
    if (!this.countStrike && !this.countBall) MissionUtils.Console.print("낫싱");
    else if (!this.countStrike && this.countBall) MissionUtils.Console.print(`${this.countBall}볼`);
    else if (this.countStrike && !this.countBall) MissionUtils.Console.print(`${this.countStrike}스트라이크`);
    else MissionUtils.Console.print(`${this.countBall}볼 ${this.countStrike}스트라이크`);
  }

  replay() {
    let option = true;
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (input) => {
      MissionUtils.Console.print(input);
      if (input !== "1" && input !== "2") throw new Error("Invalid option");
      else if (input == "1") option = false;
    })
    return option;
  }

  isGameover() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    if (this.replay()) this.gameover = true;
    else this.createComputerNumber();
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createComputerNumber();
    while (!this.gameover) {
      this.createUserNumber();
      this.count();
      this.printCount();
      if (this.countStrike === 3) this.isGameover();
      this.countBall = 0;
      this.countStrike = 0;
    }
    MissionUtils.Console.close();
  }
}

module.exports = App;
