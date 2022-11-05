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
  

  duplicateNumber(userNumber, randomNumber) {
    const result = [0,0,0];
 
    for (let i = 0; i < 3; i++) {
      if (userNumber[i] === randomNumber[i]) {
        result[0]++;
      }
      if (randomNumber.indexOf(userNumber[i]) >= 0) {
        result[1]++;
      }
    }
    if (result[0] === 0 && result[1] === 0) {
      result[2]++;
    }
    return result;
  }

module.exports = App;
