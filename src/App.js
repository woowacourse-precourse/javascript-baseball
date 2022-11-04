const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  generateGoalNumber(minNumber = 1, maxNumber = 9, numberLength = 3) {
    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, numberLength);
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

  printResult() {
    // 볼 스트라이크 낫싱 등 결과 출력;
  }

  confirmRestart() {}

  restartGame() {
    this.play();
  }

  exitGame() {}

  async play() {
    const goal = this.generateGoalNumber();
    let userAnswer = await this.receiveNumberFromUser();
    // userAnswer가 undefined면 앱 종료하기

    let score = this.getStrikeAndBallCount(goal, userAnswer);
    // while (score !== 스트라이크3) {
    //   printResult(score);
    //   userAnswer = receiveNumberFromUser();
    //   score = getBallAndStrikeCount(goal, userAnswer);
    // }
    // printResult(score);
    // if (confirmRestart()) return restartGame();
    // exitGame();
  }
}
const app = new App();
app.play();
module.exports = App;
