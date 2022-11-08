const MissionUtils = require("@woowacourse/mission-utils");

// docs/README.md를 참조

class App {
  getComputerRandomNumber() {
    const cpuNum = [];
    while (cpuNum.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!cpuNum.includes(randomNum)) {
        cpuNum.push(randomNum);
      }
    }
    return cpuNum;
  }

  startGame(cpuNum) {
    MissionUtils.Console.readLine(
      "3자리 숫자를 중복 없이 입력해주세요.",
      (input) => {
        let userNum = String(input)
          .split("")
          .map((inputStr) => parseInt(inputStr));

        this.Vaildator(userNum, input);
        let countBallAndStrike = this.countBallAndStrike(cpuNum, userNum);
        let countOnlyStrike = this.countOnlyStrike(cpuNum, userNum);
        this.judgeGameClear(countBallAndStrike, countOnlyStrike, cpuNum);
      }
    );
  }

  countBallAndStrike(cpuNum, userNum) {
    let overlappingNum = userNum.filter((overlap) => cpuNum.includes(overlap));

    return overlappingNum.length;
  }

  countOnlyStrike(cpuNum, userNum) {
    let countStrike = 0;

    for (let i = 0; i < 3; i++) {
      if (cpuNum[i] == userNum[i]) {
        countStrike++;
      }
    }

    return countStrike;
  }

  judgeGameClear(countBallAndStrike, countOnlyStrike, cpuNum) {
    if (countOnlyStrike == 3) {
      this.gameClear();
    } else {
      this.printResult(countBallAndStrike, countOnlyStrike, cpuNum);
    }
  }

  gameClear() {
    MissionUtils.Console.print("3스트라이크!");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    this.gameRestartOrQuit();
  }

  gameRestartOrQuit() {
    MissionUtils.Console.readLine(
      "게임을 종료하려면 2을, 다시 시작하려면 1을 입력하세요.",
      (input) => {
        if (parseInt(input) === 2) {
          MissionUtils.Console.close();
        } else if (parseInt(input) === 1) {
          let cpuNum = this.getComputerRandomNumber();
          this.startGame(cpuNum);
        } else {
          throw new Error("올바른 입력값을 입력해주세요.");
        }
      }
    );
  }

  printResult(countBallAndStrike, countOnlyStrike, cpuNum) {
    const ball = countBallAndStrike - countOnlyStrike;
    if (countBallAndStrike === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (ball === 0) {
      MissionUtils.Console.print(`${countOnlyStrike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${countOnlyStrike}스트라이크`);
    }

    this.startGame(cpuNum);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const cpuNum = this.getComputerRandomNumber();
    this.startGame(cpuNum);
  }

  Vaildator(userNum, input) {
    let userArr = userNum;
    let userArrLength = userArr.length;

    if (
      userArrLength != 3 ||
      isNaN(input) ||
      new Set(userArr).size != userArrLength
    ) {
      throw new Error("올바른 입력값을 입력해주세요.");
    }
  }
}

module.exports = App;
