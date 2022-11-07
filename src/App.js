const MissionUtils = require("@woowacourse/mission-utils");

class App {
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
        this.nonDuplicateNumbers = nonDuplicateNumbers;
      }
    }
    return nonDuplicateNumbers
  }

  getUserNumberInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      const userNumArr = userInput.split("").map(Number);
      this.checkError(userNumArr);
      this.checkAnswer(userNumArr);
    });
  }

  checkError(userNumArr) {
    const NUMBERS = /^[1-9]+$/;
    for (let i = 0; i < userNumArr.length; i++) {
      if (!NUMBERS.test(userNumArr[i])) throw new Error("숫자가 입력되지 않았습니다");
    }
    if (userNumArr.length !== 3) throw new Error("3개의 숫자가 아닙니다.");
    if (new Set(userNumArr).size !== 3) throw new Error("중복된 숫자가 있습니다.");
  }

  checkAnswer(userNumArr) {
    let STRIKE = 0;
    let BALL = 0;
    let result = '';

    for (let i = 0; i < userNumArr.length; i++) {
      if (userNumArr[i] === this.nonDuplicateNumbers[i]) STRIKE++;
      else if (userNumArr.includes(this.nonDuplicateNumbers[i])) BALL++;
    }

    if (BALL === 0 && STRIKE === 0) {
      result = '낫싱';
    } else if (BALL === 0 && STRIKE !== 0) {
      result = `${STRIKE}스트라이크`;
    } else if (BALL !== 0 && STRIKE === 0) {
      result = `${BALL}볼`;
    } else if (BALL !== 0 && STRIKE !== 0) {
      result = `${BALL}볼 ${STRIKE}스트라이크`;
    } else {
      result = '3스트라이크';
    }

    this.resultAnswer(result);
  }
 
  resultAnswer(result) {
    MissionUtils.Console.print(result);
    if (result !== "3스트라이크") {
      this.getUserNumberInput();
    } else if (result === "3스트라이크") {
      this.gameEndMessage();
    }
  }

  gameEndMessage() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userInput) => {
      if (userInput === '1') app.play();
      else if (userInput === '2') MissionUtils.Console.close();
      else throw new Error('다른 값을 입력하셨습니다');
    });
  };
}

const app = new App();
app.play();

module.exports = App;