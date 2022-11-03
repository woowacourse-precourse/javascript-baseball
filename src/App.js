const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.computerInput();
    
    let user = this.input();
    MissionUtils.Console.print(computer);
    MissionUtils.Console.print(input);
  }

  computerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number))
        computer.push(number);
    }

    return computer;
  }

  playerInput() {
    let value;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      value = number;
    });
    MissionUtils.Console.close();

    return value;
  }

  playBall() {

  }
}

module.exports = App;
