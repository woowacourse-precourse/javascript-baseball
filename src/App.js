const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  generateGoalNumber() {
    const threeNumbers = new Set();
    const MIN = 1;
    const MAX = 9;
    while (threeNumbers.size < 3) {
      const number = Random.pickNumberInRange(MIN, MAX);
      threeNumbers.add(number);
    }
    return [...threeNumbers];
  }

  async receiveNumberFromUser() {
    let userAnswer;
    const answer = await new Promise((resolve) => {
      Console.readLine("숫자를 입력해주세요 : ", (answer) => resolve(answer));
    });
    const arrayOfAnswer = Array.from(answer).map(
      (stringNumber) => +stringNumber
    );
    const isAllNumber = (numberArr) =>
      numberArr.every((number) => !Number.isNaN(number));
    if (!isAllNumber(arrayOfAnswer)) throw Error("숫자만 입력해주세요.");

    userAnswer = [...new Set(arrayOfAnswer)];
    const isCorrectedLength = (arr) => arr.length === 3;
    if (!isCorrectedLength(userAnswer))
      throw Error("세 자리 숫자를 입력해주세요.");

    return userAnswer;
  }

  getStrikeAndBallCount(goal, userAnswer) {
    const result = [];
    const userAnswerOfNotIncludeStrike = [];

    const getStrike = () => {
      let strikeCount = 0;
      userAnswer.forEach((oneAnswer, idx) => {
        oneAnswer === goal[idx]
          ? (strikeCount = strikeCount + 1)
          : userAnswerOfNotIncludeStrike.push(oneAnswer);
      });
      result.push(strikeCount);
    };
    getStrike();

    const getBall = () => {
      let ballCount = 0;
      userAnswerOfNotIncludeStrike.forEach((oneAnswer) => {
        const existBall = goal.find((oneGoal) => oneGoal === oneAnswer);
        if (existBall) ballCount = ballCount + 1;
      });
      result.push(ballCount);
    };
    getBall();

    return result;
  }

  printResult(score) {
    const [strikeScore, ballScore] = score;
    const BALL = {
      0: "",
      1: "1볼",
      2: "2볼",
      3: "3볼",
    };
    const STRIKE = {
      0: "",
      1: "1스트라이크",
      2: "2스트라이크",
      3: "3스트라이크",
    };
    const NOTHING = "낫싱";
    const message = `${BALL[ballScore]} ${STRIKE[strikeScore]}`.trimLeft();
    if (message) {
      Console.print(message);
      return;
    }
    Console.print(NOTHING);
  }

  confirmRestart() {}

  restartGame() {
    this.play();
  }

  exitGame() {}

  async play() {
    const goal = this.generateGoalNumber();
    let userAnswer = await this.receiveNumberFromUser();
    let score = this.getStrikeAndBallCount(goal, userAnswer);

    const STRIKE_COUNT = 3;
    const isThreeStrike = (strikeScore) => strikeScore === STRIKE_COUNT;
    while (!isThreeStrike(score[0])) {
      this.printResult(score);
      userAnswer = await this.receiveNumberFromUser();
      score = this.getStrikeAndBallCount(goal, userAnswer);
    }

    // this.printResult(score);
    // if (confirmRestart()) return restartGame();
    // exitGame();
  }
}

// const app = new App();
// app.play();

module.exports = App;
