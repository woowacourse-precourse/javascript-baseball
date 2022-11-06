const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getComputerNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };

  getUserNumber = () => {
    let userNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (inputNumber) => {
      const userNumberArray = Array.from(inputNumber, Number);
      try {
        this.isValid(userNumberArray);
        userNumber = userNumberArray;
      } catch (error) {
        MissionUtils.Console.print(error);
        MissionUtils.Console.close();
      }
    });
    return userNumber;
  };

  isValid = (userNumber) => {
    if (userNumber.length !== 3) throw new Error("숫자 3개를 입력해주세요");
    if (userNumber.size > new Set(userNumber).length)
      throw new Error("중복되지 않는 숫자를 입력해주세요");
    if (userNumber.every((num) => isNaN(num)))
      throw new Error("숫자를 입력해주세요");
  };

  getMatchResult = (computer, user) => {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (computer[i] === user[j]) {
          if (i === j) strike++;
          else ball++;
          break;
        }
      }
    }
    return [ball, strike];
  };

  matchResultPrint = (matchNum) => {
    const [ball, strike] = matchNum;
    let message = "";
    if (ball > 0) message += ball + "볼 ";
    if (strike > 0) message += strike + "스트라이크";
    if (strike === 0 && ball === 0) message = "낫싱";
    message = message.trim();
    MissionUtils.Console.print(message);
    if (message === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (answer) => {
          if (answer === "1") {
            this.gameStart();
          } else if (answer === "2") {
            MissionUtils.Console.close();
          }
        }
      );
    } else {
      this.gameMatch();
    }
  };

  gameMatch = () => {
    const userNumber = this.getUserNumber();
    const matchResult = this.getMatchResult(this.computerNumber, userNumber);
    this.matchResultPrint(matchResult);
  };

  gameStart = () => {
    this.computerNumber = this.getComputerNumber();
    this.gameMatch();
  };

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}

module.exports = App;
