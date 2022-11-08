const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const randomNums = this.createRandomComNum();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    this.tryToAnswer(randomNums);
  }

  createRandomComNum() {
    const randomNums = [];
    while (randomNums.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 10);
      if (!randomNums.includes(randomNum)) {
        randomNums.push(randomNum);
      }
    }
    return randomNums;
  }

  tryToAnswer(randomNums) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.checkValidation(answer);
      this.getBallStrikeCount(randomNums, answer);
    });
  }

  checkValidation(answer) {
    if (answer.length != 3)
      throw new Error("입력하신 숫자가 3자리가 아닙니다.");
    else if (
      answer[0] == answer[1] ||
      answer[0] == answer[2] ||
      answer[1] == answer[2]
    ) {
      throw new Error("입력하신 숫자에 똑같은 숫자가 존재합니다.");
    } else if (isNaN(answer) || answer.includes(0)) {
      throw new Error("입력하신 글자에 1~9가 아닌 글자가 포함되어 있습니다.");
    }
  }

  getBallStrikeCount(randomNums, answer) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] == randomNums[i]) strike++;
      else if (answer.includes(randomNums[i])) ball++;
    }
    this.printBallStrikeCount(ball, strike);
    this.tryToAnswer(randomNums);
  }

  printBallStrikeCount(ball, strike) {
    if (strike == 3) {
      MissionUtils.Console.print("3스트라이크\n");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
      this.newGame();
      return;
    }
    if (ball == 0 && strike == 0) MissionUtils.Console.print("낫싱\n");
    else if (strike == 0) MissionUtils.Console.print(ball + "볼\n");
    else if (ball == 0) MissionUtils.Console.print(strike + "스트라이크\n");
    else MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크\n");
  }

  newGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (answer == 1) {
          const randomNums = this.createRandomComNum();
          this.tryToAnswer(randomNums);
        } else if (answer == 2) {
          MissionUtils.Console.close();
        } else throw new Error("입력하신 글자가 1 혹은 2가 아닙니다.");
      }
    );
  }
  
}

const app = new App();
app.play();

module.exports = App;
