const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.userNumber = [0, 0, 0];
    this.randomNumber = [0, 0, 0];
  }

  printStartSentence() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  setRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
          computer.push(number);
        }
    }
    this.randomNumber = computer;
  } 
  
module.exports = App;
