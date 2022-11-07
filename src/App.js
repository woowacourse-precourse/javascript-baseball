const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    userNumber = "";
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  getThreeNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getUserNum() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      if (!this.isUserNumValid(number)) throw "입력값이 잘못되었습니다.";
      this.userNumber = number;
    });
  }

  isUserNumValid(userNum) {
    var userNumArr = userNum.split("");
    var userNumSet = new Set(userNumArr);
    if (userNumSet.size !== userNumArr.length) return false;
    else if (userNum.length !== 3) return false;
    else if (userNum >= "100" && userNum <= "999") return false;
    else if (userNumArr.includes(0)) return false;
    else return true;
  }

  countStrike(computerNum, userNum) {
    var strikeCount = 0;
    for (var i = 0; i < 3; i++) {
      if (computerNum[i] === parseInt(userNum[i])) strikeCount += 1;
    }
    return strikeCount;
  }

  countBall(computerNum, userNum) {
    var ballCount = 0;
    for (var i = 0; i < 3; i++) {
      if (
        userNum.includes(computerNum[i]) &&
        computerNum[i] !== parseInt(userNum[i])
      )
        ballCount += 1;
    }
    return ballCount;
  }

  printResult(strikes, balls) {
    if (strikes === 0 && balls === 0) return "낫싱";
    else if (strikes === 0) return `${balls}볼`;
    else if (balls === 0) return `${strikes}스트라이크`;
    else return `${balls}볼 ${strikes}스트라이크`;
  }

  restartGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === "1") this.playGame();
        else if (answer === "2") MissionUtils.Console.close();
        else throw "입력값이 잘못되었습니다.";
      }
    );
  }

  playGame() {
    const answer = this.getThreeNum();
    while (1) {
      this.getUserNum();
      var strike = this.countStrike(answer, this.userNumber);
      var ball = this.countBall(answer, this.userNumber);
      var result = this.printResult(strike, ball);
      MissionUtils.Console.print(result);
      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.restartGame();
        break;
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
