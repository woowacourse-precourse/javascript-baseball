const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const randomNumber = this.getRandomNumber();

    this.round(randomNumber);
  }

  getRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  round(computerNumber) {
    return MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
      if (
        answer.length !== 3 ||
        isNaN(Number(answer)) ||
        !this.checkDuplicate(answer)
      ) {
        throw new Error("잘못된 값을 입력하여 게임을 종료합니다.");
      }
      this.checkForAnswer(computerNumber, answer);
    });
  }

  checkDuplicate(num) {
    const set = new Set();

    for (let el of num) {
      set.add(el);
    }

    if (set.size === 3) {
      return true;
    } else {
      return false;
    }
  }

  checkForAnswer(computerNumber, answer) {
    let result = this.myResult(computerNumber, answer);

    if (result === "3스트라이크") {
      this.correctAnswer(result);
    } else {
      MissionUtils.Console.print(result);
      this.round(computerNumber);
    }
  }

  myResult(computer, input) {
    const myNumber = this.changeToArr(input);
    const answer = this.countStrikeAndBall(computer, myNumber);
    let ballCount, strikeCount;

    if (answer["ball"] !== 0) {
      ballCount = `${answer["ball"]}볼`;
    }
    if (answer["strike"] !== 0) {
      strikeCount = `${answer["strike"]}스트라이크`;
    }

    return this.countResult(ballCount, strikeCount);
  }

  changeToArr(num) {
    let myArr = [];

    for (let el of num) {
      myArr.push(Number(el));
    }

    return myArr;
  }

  countStrikeAndBall(computerNumber, myNumber) {
    let answer = {
      strike: 0,
      ball: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === myNumber[i]) {
        answer["strike"]++;
      }
      if (
        computerNumber[i] !== myNumber[i] &&
        computerNumber.includes(myNumber[i])
      ) {
        answer["ball"]++;
      }
    }

    return answer;
  }

  countResult(ball, strike) {
    if (!ball && !strike) {
      return "낫싱";
    }
    if (!ball) {
      return strike;
    }

    if (!strike) {
      return ball;
    }

    return `${ball} ${strike}`;
  }
}

module.exports = App;
