const { Random, Console } = require("@woowacourse/mission-utils");
const {
  VALID_ANSWER,
  RESTART,
  TO_STRING_BALL,
  TO_STRING_STRIKE,
  NOTHING,
  MIN,
  MAX,
} = require("./constant");
const { throwError } = require("./handleError");
const { isAllNumber, isCorrectedLength } = require("./utils");

class App {
  goal = [];

  generateGoalNumber() {
    const threeNumbers = new Set();
    while (threeNumbers.size < 3) {
      const number = Random.pickNumberInRange(MIN, MAX);
      threeNumbers.add(number);
    }
    this.goal = [...threeNumbers];
  }

  play() {
    this.generateGoalNumber();
    this.receiveAnswer();
  }

  verifyUserAnswer(answer) {
    let verifiedAnswer;
    const arrayOfAnswer = Array.from(answer).map(
      (stringNumber) => +stringNumber
    );

    if (!isAllNumber(arrayOfAnswer)) {
      this.exitGame();
      throwError.onlyNumber();
    }

    verifiedAnswer = [...new Set(arrayOfAnswer)];

    if (!isCorrectedLength(verifiedAnswer)) {
      this.exitGame();
      throwError.lengthIsThree();
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

  scoreToMessage(score) {
    const [strikeScore, ballScore] = score;
    const message =
      `${TO_STRING_BALL[ballScore]} ${TO_STRING_STRIKE[strikeScore]}`.trimLeft();
    return message ? message : NOTHING;
  }

  printResult(message) {
    Console.print(message);
  }

  exitGame() {
    Console.close();
  }

  restartGame() {
    this.play();
  }

  confirmRestart() {
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

  receiveAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const userAnswer = this.verifyUserAnswer(answer);
      let score = this.getStrikeAndBallCount(this.goal, userAnswer);
      this.printResult(this.scoreToMessage(score));

      const THREE_STRIKE = 3;
      const isThreeStrike = (strikeScore) => strikeScore === THREE_STRIKE;
      if (isThreeStrike(score[0])) {
        this.printResult(
          `${this.scoreToMessage(
            score
          )}\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        this.confirmRestart();
      }

      this.receiveAnswer();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
