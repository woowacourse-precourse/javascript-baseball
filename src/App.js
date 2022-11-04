const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  generateGoalNumber(minNumber = 1, maxNumber = 9, numberLength = 3) {
    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, numberLength);
  }

  receiveNumberFromUser() {
    let userNumber;
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const uniqueNumber = [...new Set(Array.from(answer))];
      if (uniqueNumber.length !== 3) throw Error();
      userNumber = uniqueNumber.map((stringNumber) => +stringNumber);
    });
    return userNumber;
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

  play() {
    const goal = this.generateGoalNumber();
    let userAnswer = this.receiveNumberFromUser();
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

module.exports = App;
