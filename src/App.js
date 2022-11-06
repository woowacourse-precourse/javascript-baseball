const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer;
  numberInput;

  play() {
    this.gameStartMessage();
    this.computerRandomNumber();
    this.getUserNumberInput();
  }

  gameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
  };
  

  computerRandomNumber() {
    const nonDuplicateNumbers = [];
    while (nonDuplicateNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nonDuplicateNumbers.includes(randomNumber)) {
        nonDuplicateNumbers.push(randomNumber);
      }
    }
    
    this.answer = Number(nonDuplicateNumbers.join(""));
    return this.answer;
  }

  getUserNumberInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numberInput) => {
      this.userNumberInput = numberInput;
    });
  }
}

const app = new App();
app.play();

module.exports = App;