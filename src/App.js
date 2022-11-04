const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startGame();
    const computer = this.selectComputer();
    const user = this.selectUser();
    this.countScore(computer, user);
  }

  startGame() {
    const START = "숫자 야구 게임을 시작합니다.";
    console.log(START);
  }

  selectComputer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }

  selectUser() {
    let user;

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (num) => {
      user = num;
    });

    return user;
  }

  countScore(computer, user) {
    this.isError(user);
  }

  isError(number) {
    if (number.length !== 3 || isNum(number)) {
      throw 'Parameter is not a number!';
    }
  }
}

module.exports = App;
