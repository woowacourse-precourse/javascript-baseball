const {Console, Random} = require("@woowacourse/mission-utils");

class App {
  computerNumbers;
  userNumbers;

  play () {
    this.setComputerNumbers();
    this.match();
  }

  setComputerNumbers () {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.computerNumbers = numbers.map(String);
  }

  match () {
    Console.readLine("숫자를 입력해주세요: ", (input) => {
      this.userNumbers = input.split("")

      console.log("정답: ", this.computerNumbers);
      console.log("플레이어 입력값", this.userNumbers);
    
      if(this.computerNumbers.toString() === this.userNumbers.toString()) {
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

