const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = this.createComputerNumber();
    const userNumber = this.inputUserNumber(computerNumber);
    // console.log(computerNumber, userNumber);
  }

  // 컴퓨터의 숫자 랜덤으로 생성한다. (1부터 9까지 서로 다른 수로 이루어진 3자리의 수)
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

  // 사용자에게 숫자를 입력 받는다.
  inputUserNumber(computerNumber) {
    let userNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      this.isNumberVaild(number);
      userNumber = number;
      this.countScore(number, computerNumber);
    });
    return userNumber;
  }

  // 사용자가 입력한 숫자 유효성 검사
  isNumberVaild(number) {
    this.checkNumberLength(number);
    this.checkNumberDifferent(number);
    this.checkNumberInRange(number);
    return number;
  }

  // 유효성 검사: 입력한 수가 3자리 수인가
  checkNumberLength(number) {
    if (number.length !== 3) {
      throw "3자리 수를 입력해주세요.";
    }
  }

  // 유효성 검사: 입력한 수가 서로 다른 숫자인가
  checkNumberDifferent(number) {
    const removeDuplicates = new Set(number);
    if (number.length !== removeDuplicates.size) {
      throw "서로 다른 수를 입력하세요.";
    }
  }

  // 유효성 검사: 1 ~ 9 범위에 해당하는 수를 입력했는가
  checkNumberInRange(number) {
    for (let i = 0; i < number.length; i++) {
      if (!(parseInt(number[i]) >= 1 && parseInt(number[i]) <= 9)) {
        throw "1 ~ 9 범위에 해당하는 숫자를 입력하세요.";
      }
    }
  }

  countScore(user, computer) {
    const score = this.countBallAndStrike(user, computer);
    const result = this.printScore(score);
    console.log(result);
  }

  // 사용자가 입력한 숫자와 컴퓨터 숫자를 비교하여 ball, strike 개수 세기
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

  // 비교 결과 출력
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
  }
}

const app = new App();
app.play();

module.exports = App;
