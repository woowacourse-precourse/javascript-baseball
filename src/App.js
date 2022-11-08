const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  goal = [];

  generateGoalNumber() {
    const threeNumbers = new Set();
    const MIN = 1;
    const MAX = 9;
    while (threeNumbers.size < 3) {
      const number = Random.pickNumberInRange(MIN, MAX);
      threeNumbers.add(number);
    }
    this.goal = [...threeNumbers];
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

  confirmRestart() {
    const RESTART = "1";
    const EXIT = "2";
    const VALID_ANSWER = {
      1: RESTART,
      2: EXIT,
    };
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (VALID_ANSWER[answer] === RESTART) {
          this.restartGame();
          return;
        }
        this.exitGame();
      }
    );
  }

  restartGame() {
    this.play();
  }

  exitGame() {
    Console.close();
  }

  play() {
    this.generateGoalNumber();
    this.receiveAnswer();
  }

  receiveAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const userAnswer = this.verifyUserAnswer(answer);
      let score = this.getStrikeAndBallCount(this.goal, userAnswer);
      this.printResult(score);

      const THREE_STRIKE = 3;

      const isThreeStrike = (strikeScore) => strikeScore === THREE_STRIKE;
      if (isThreeStrike(score[0])) {
        this.printResult(score, "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.confirmRestart();
      }

      this.receiveAnswer();
    });
  }
}

// const app = new App();
// app.play();

module.exports = App;
