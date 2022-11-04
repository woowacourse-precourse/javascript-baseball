class App {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
  }
  play() {
    return this.getUserInput();
  }

  makeRandomNumbers() {
    const computerInputNumbersArray = [];
    while (computerInputNumbersArray.length < 3) {
      const eachNumber = this.missionRandom.pickNumberInRange(1, 9);
      if (!computerInputNumbersArray.includes(eachNumber)) {
        computerInputNumbersArray.push(eachNumber);
      }
    }
    return computerInputNumbersArray.join("");
  }

  getUserInput() {
    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInput) => {
      if (this.compareEachNumber(this.makeRandomNumbers(), userInput)) {
        this.missionConsole.print(this.compareEachNumber(this.makeRandomNumbers(), userInput));
      }
      this.missionConsole.close();
    });
  }

  compareEachNumber(pcInputNumbers, userInput) {
    const computerInputNumbers = pcInputNumbers.split("").map((i) => +i);
    const userInputNumbers = userInput.split("").map((i) => +i);

    return userInputNumbers.reduce((acc, currentValue, index) => {
      if (computerInputNumbers[index] > currentValue) {
        // return acc.push;
        acc.push(`${index}번째 인덱스 자릿수: pc`);
      } else if (computerInputNumbers[index] === currentValue) {
        acc.push(`${index}번째 인덱스 자릿수: 무승부`);
      } else {
        acc.push(`${index}번째 인덱스 자릿수: user`);
      }
      return acc;
    }, []);
  }
}
const app = new App();
app.play();

module.exports = App;
