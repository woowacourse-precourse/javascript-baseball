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
      console.log("플레이어 입력값", this.user.numbers);
      this.referee.ball = isBall(this.computer.numbers, this.user.numbers)
      console.log("볼", this.referee.ball);

  
      if(String(this.computer.numbers) === String(this.user.numbers)) {
        Console.print("게임종료")
        Console.close();
        return;
      }
      this.match();
    });
  }
}

const app = new App();
app.play();

module.exports = App;

