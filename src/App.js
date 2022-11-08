const MissionUtils = require("@woowacourse/mission-utils");

class App {
  checkStrikeOrBall(
    COMPUTER,
    computerNumberIndex,
    answer,
    answerNumberIndex,
    strike,
    ball
  ) {
    if (COMPUTER[computerNumberIndex] == answer[answerNumberIndex]) {
      if (computerNumberIndex == answerNumberIndex) {
        strike += 1;
      } else ball += 1;
    }
    return [strike, ball];
  }

  printBallPointResult(strike, ball) {
    if (strike == 0 && ball == 0) {
      MissionUtils.Console.print("낫싱");
      return "낫싱";
    } else if (strike == 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return `${ball}볼`;
    } else if (ball == 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return `${strike}스트라이크`;
    } else if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${strike}스트라이크 ${ball}볼`);
      return `${strike}스트라이크 ${ball}볼`;
    }
  }

  playBaseball(COMPUTER, answer) {
    let strike = 0;
    let ball = 0;
    for (
      let computerNumberIndex = 0;
      computerNumberIndex < 3;
      computerNumberIndex++
    ) {
      for (
        let answerNumberIndex = 0;
        answerNumberIndex < 3;
        answerNumberIndex++
      ) {
        [strike, ball] = this.checkStrikeOrBall(
          COMPUTER,
          computerNumberIndex,
          answer,
          answerNumberIndex,
          strike,
          ball
        );
      }
    }
    return this.printBallPointResult(strike, ball);
  }

  getComputerNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER;
  }

  getPersonNumber(COMPUTER) {
    let result = "";
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (answer.length > 3) {
        throw "숫자가 너무 많습니다.";
      }
      result = this.playBaseball(COMPUTER, answer);
      if (result === "3스트라이크") {
        return this.endGame();
      } else {
        result = this.getPersonNumber(COMPUTER);
        return result;
      }
    });
  }
  play() {}
}

module.exports = App;
