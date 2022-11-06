const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startGame();
    this.playGame();
  }

  startGame() {
    const START = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(START);
  }

  playGame() {
    const computer = this.selectComputer();
    this.solveNumber(computer);
  }

  selectComputer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  solveNumber(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (num) => {
      this.isUserError(num, computer);
    });
  }

  isUserError(user, computer) {
    this.checkOverlap(user);
    this.checkLength(user);
    this.checkNumber(user);
    this.checkRange(user);

    this.countScore(computer, user);
  }

  checkOverlap(number) {
    const numberList = number.split("").sort();
    const validNumber = [...new Set(numberList)];
    if (validNumber.length < 3) {
      throw "중복되지 않은 숫자 3개를 입력해주세요.";
    }
  }

  checkLength(number) {
    if (number.length !== 3) {
      throw "3자리 숫자를 입력해주세요.";
    }
  }

  checkNumber(number) {
    if (isNaN(number)) {
      throw "3자리 숫자를 입력해주세요.";
    }
  }

  checkRange(number) {
    if (number.includes("0")) {
      throw "1과 9 사이의 숫자 3개를 입력해주세요.";
    }
  }

  countScore(computer, user) {
    const score = this.calculateScore(computer, user);
    const result = this.printScore(score, computer);
    return this.isAnswer(result, computer);
  }

  calculateScore(computer, user) {
    let ball = 0;
    let strike = 0;
    const intersection = [...computer].filter((number) =>
      [...user].includes(number)
    );

    intersection.forEach((number) => {
      ball++;

      if (computer.indexOf(number) === user.indexOf(number)) {
        ball--;
        strike++;
      }
    });
    return [ball, strike];
  }

  printScore(score) {
    const scoreList = [
      { name: "볼", score: score[0] },
      { name: "스트라이크", score: score[1] },
    ];
    let newScoreList = scoreList.filter((item) => {
      return item.score >= 1;
    });
    let result = newScoreList.map((item) => {
      return `${item.score}${item.name}`;
    });
    result = result.join(" ");

    if (result.length === 0) {
      result = "낫싱";
    }

    MissionUtils.Console.print(result);
    return result;
  }

  isAnswer(answer, computer) {
    if (answer.includes("3스트라이크")) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.selectOption();
    }

    this.solveNumber(computer);
  }

  selectOption() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (num) => {
        this.isOptionError(num);
      }
    );
  }

  isOptionError(option) {
    if (option !== "1" && option !== "2") {
      throw "잘못된 옵션을 선택하였습니다.";
    }

    if (option === "1") {
      return this.playGame();
    }

    if (option === "2") {
      MissionUtils.Console.print("게임 종료");
    }
  }
}

module.exports = App;
