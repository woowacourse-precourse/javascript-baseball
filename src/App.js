const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    const randomNumbers = this.generateRandomNumbers();
    this.getUserInput(randomNumbers);
  }

  getResultMessage(strike, ball) {
    if (!strike && ball) 
        return ball+'볼';
    if (strike && !ball) 
        return strike+'스트라이크';
    if (strike && ball) 
        return ball + '볼 ' + strike + '스트라이크';

    return "낫싱";
  }

  getStrikeBallCount(randomNumbers, guessNumbers) {
    let strike = 0;
    let ball = 0;

    for (let index = 0; index < 3; index++) {
      if(randomNumbers[index] === guessNumbers[index]) 
        strike ++;
    }

    for (let value of guessNumbers) {
      ball += randomNumbers.includes(value);
    }

    ball -= strike;

    return { strike, ball };
  }

  getUserInput(randomNumbers) {
    Console.readLine("숫자를 입력해 주세요 : ", (guessNumbers) => {
      this.checkAllValidation(guessNumbers);
      const { strike, ball } = this.getStrikeBallCount(randomNumbers, guessNumbers);
      Console.print(this.getResultMessage(strike, ball));
    });
  }

  checkAllValidation(guessNumbers) {
    this.checkLength(guessNumbers);
    this.checkRange(guessNumbers);
    this.checkDuplicate(guessNumbers);
  }

  checkLength(guessNumbers) {
    if (guessNumbers.length !== 3) 
        throw new Error("Invalid Length Error.");
  }

  checkRange(guessNumbers) {
    if (!(1 <= Math.min(...guessNumbers) && Math.max(...guessNumbers) <= 9)) {
        throw new Error("Invalid Range Error.");
    }
  }

  checkDuplicate(guessNumbers) {
    const setLength = new Set(guessNumbers).size;
    if (setLength !== 3) {
      throw new Error("Duplicate Error.");
    }
  }

  generateRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers.join("");
  }
}
const app = new App();
app.play();

module.exports = App;
