const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computer = [];
    this.user = [];
  }

  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    let isCorrect = false;

    this.setRandomNumbers();

    while (!isCorrect) {
      this.readLine("숫자를 입력해주세요 : ", (answer) => {
        this.setUserNumbers(answer);
      });

      const memo = this.count(this.computer, this.user);
      this.printResultMessage(memo);

      isCorrect = memo.strike === 3;
    }

    this.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        answer === "1" && this.startGame();
      }
    );
  }

  count(computer, user) {
    const memo = { ball: 0, strike: 0 };

    computer.forEach((computerNumber, index) => {
      if (computerNumber === user[index]) {
        memo.strike += 1;
      } else if (user.includes(computerNumber, index + 1)) {
        memo.ball += 1;
      }
    });

    return memo;
  }

  printResultMessage(memo) {
    let resultMessage = "";

    if (memo.ball !== 0) {
      resultMessage += `${memo.ball}볼`;
    }

    if (memo.strike !== 0) {
      resultMessage += ` ${memo.strike}스트라이크`;
    }

    if (!resultMessage) {
      resultMessage = "낫싱";
    }

    this.print(resultMessage.trim());

    if (memo.strike === 3) {
      this.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }

  print(str) {
    MissionUtils.Console.print(str);
  }

  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  setRandomNumbers() {
    this.computer = [];

    while (this.computer.length < 3) {
      const number = this.getRandomNumber();
      this.pushNumberToComputer(number);
    }
  }

  setUserNumbers(str) {
    const numbers = this.separateNumbers(str);
    this.user = [...numbers];
  }

  separateNumbers(str) {
    const numbers = [...str];
    return numbers.map((number) => Number(number));
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  pushNumberToComputer(number) {
    if (this.isValidNumber(number)) {
      this.computer.push(number);
    }
  }

  isValidNumber(number) {
    return !this.computer.includes(number);
  }
}

module.exports = App;
