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

  async receiveAnswerFromCLI(question = "") {
    return await new Promise((resolve) => {
      Console.readLine(question, (answer) => resolve(answer));
    });
  }

  verifyUserAnswer(answer) {
    let verifiedAnswer;
    const arrayOfAnswer = Array.from(answer).map(
      (stringNumber) => +stringNumber
    );
    const isAllNumber = (numberArr) =>
      numberArr.every((number) => !Number.isNaN(number));
    if (!isAllNumber(arrayOfAnswer)) {
      this.exitGame();
      throw "숫자만 입력해주세요.";
    }

    verifiedAnswer = [...new Set(arrayOfAnswer)];
    const isCorrectedLength = (arr) => arr.length === 3;
    if (!isCorrectedLength(verifiedAnswer)) {
      this.exitGame();
      throw "세 자리 숫자를 입력해주세요.";
    }

    return verifiedAnswer;
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

  printResult(score, otherTextMessage = "") {
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
    const message =
      `${BALL[ballScore]} ${STRIKE[strikeScore]}\n${otherTextMessage}`.trim();
    if (message) {
      Console.print(message);
      return;
    }
    Console.print(NOTHING);
  }

  async confirmRestart() {
    const RESTART = "1";
    const EXIT = "2";
    const VALID_ANSWER = {
      1: RESTART,
      2: EXIT,
    };
    let userAnswer;

    while (!VALID_ANSWER[userAnswer]) {
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      userAnswer = await this.receiveAnswerFromCLI();
    }
    return userAnswer === RESTART;
  }

  restartGame() {
    this.play();
  }

  exitGame() {
    Console.close();
  }

  async play() {
    const PLEASE_ENTER_NUMBER = "숫자를 입력해주세요 : ";
    const goal = this.generateGoalNumber();
    const userAnswer = this.verifyUserAnswer(
      await this.receiveAnswerFromCLI(PLEASE_ENTER_NUMBER)
    );
    let score = this.getStrikeAndBallCount(goal, userAnswer);

    const THREE_STRIKE = 3;
    const isThreeStrike = (strikeScore) => strikeScore === THREE_STRIKE;
    while (!isThreeStrike(score[0])) {
      this.printResult(score);
      const userAnswer = this.verifyUserAnswer(
        await this.receiveAnswerFromCLI(PLEASE_ENTER_NUMBER)
      );
      score = this.getStrikeAndBallCount(goal, userAnswer);
    }

    this.printResult(score, "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    if (await this.confirmRestart()) return this.restartGame();

    this.exitGame();
  }
}

const app = new App();
app.play();

module.exports = App;
