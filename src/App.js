const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  playGame() {
    const computerNumber = this.createComputerNumber();
    const user = this.inputUserNumber(computerNumber);
  }

  createComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  inputUserNumber(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      this.isNumberVaild(number);
      this.countScore(number, computerNumber);
    });
  }

  // 사용자가 입력한 값 유효성 검사
  isNumberVaild(number) {
    this.checkNumberLength(number);
    this.checkInputValueisNumber(number);
    this.checkNumberDifferent(number);
    this.checkNumberInRange(number);
    return number;
  }

  checkInputValueisNumber(number) {
    if (isNaN(number)) {
      throw "숫자를 입력해주세요.";
    }
  }

  checkNumberLength(number) {
    if (number.length !== 3) {
      throw "3자리 수를 입력해주세요.";
    }
  }

  checkNumberDifferent(number) {
    const removeDuplicates = new Set(number);
    if (number.length !== removeDuplicates.size) {
      throw "서로 다른 수를 입력하세요.";
    }
  }

  checkNumberInRange(number) {
    if (number.includes(0)) {
      throw "0은 입력할 수 없는 숫자입니다. 1 ~ 9 범위에 해당하는 수를 입력해주세요.";
    }
  }

  countScore(user, computer) {
    const score = this.countBallAndStrike(user, computer);
    const result = this.printScore(score);
    const answer = this.checkThreeStrikes(result, computer);
  }

  countBallAndStrike(user, computer) {
    let score = {
      ball: 0,
      strike: 0,
    };
    let compare = [...user].map((num, index) => {
      if (num === computer[index]) {
        score.strike++;
      } else if (computer.includes(num)) {
        score.ball++;
      }
    });
    return score;
  }

  printScore(score) {
    let result = "";
    const ball = score.ball;
    const strike = score.strike;

    if (score.ball > 0 && score.strike > 0) {
      result += `${score.ball}볼 ${score.strike}스트라이크`;
    } else if (strike === 0 && ball > 0) {
      result += `${score.ball}볼`;
    } else if (ball === 0 && strike > 0) {
      result += `${score.strike}스트라이크`;
    }

    if (!result) {
      result = "낫싱";
    }

    MissionUtils.Console.print(result);
    return result;
  }

  checkThreeStrikes(result, computer) {
    if (result === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료.");
      this.selectAfterAction();
    } else {
      this.inputUserNumber(computer);
    }
  }

  selectAfterAction() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (option) => {
        this.selectEndOrRestartGame(option);
      }
    );
  }

  selectEndOrRestartGame(option) {
    if (option === "1") {
      this.playGame();
    } else if (option === "2") {
      MissionUtils.Console.close();
    } else {
      throw "1 또는 2 이외의 다른 값이 입력되었습니다.";
    }
  }
}

const app = new App();
app.play();

module.exports = App;
