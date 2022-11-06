const {Console, Random} = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");
const { Referee, isBall } = require("./Referee");

class App {
  user = new User();
  computer = new Computer();
  referee = new Referee();

  play () {
    this.initialize();
    this.match();
  }

  initialize () {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.computer.numbers = numbers.map(String);

    Console.print("숫자 야구 게임을 시작합니다.");
  }

  match () {
    Console.readLine("숫자를 입력해주세요: ", (input) => {
      this.user.numbers = input.split("")

      console.log("정답: ", this.computer.numbers);
      console.log("입력: ", this.user.numbers);

      this.referee.judge(this.computer.numbers, this.user.numbers)

      if (this.referee.strike === 3) {
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.close();
        return;
      } else if (this.referee.strike === 0 && this.referee.ball === 0) {
        Console.print('낫싱');
      } else if (this.referee.strike === 0) {
        Console.print(`${this.referee.ball}볼`);
      } else if (this.referee.ball === 0) {
        Console.print(`${this.referee.strike}스트라이크`);
      } else {
        Console.print(`${this.referee.ball}볼 ${this.referee.strike}스트라이크`);
      }

      this.match();
    });
  }
}

const app = new App();
app.play();

module.exports = App;

