const MissionUtils = require("@woowacourse/mission-utils");

class App {
  comArr = [];
  pushUniqueNumber(num) {
    num = String(num);
    if (!this.comArr.includes(num)) {
      return this.comArr.push(num);
    }
  }

  getRandomComputerArr() {
    while (this.comArr.length < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      this.pushUniqueNumber(randomNumber);
    }
    return this.comArr;
  }

  pushUserInput(arr, num) {
    for (let i = 0; i < num.length; i++) {
      arr.push(num[i]);
    }
  }

  checkUserInputError(answer) {
    if (answer.length !== 3 || answer.includes("0") || isNaN(answer)) {
      throw new Error("1부터 9까지 숫자 3개를 입력하세요");
    }
  }

  responseUserInput() {
    let userInputArr = [];
    MissionUtils.Console.readLine("숫자를 입력하세요: ", (answer) => {
      this.checkUserInputError(answer);
      this.pushUserInput(userInputArr, answer);
      const countedStrikeArr = this.countStrike(userInputArr);
      const countedBallArr = this.countBall(userInputArr, countedStrikeArr);
      this.printJudgemnet(countedStrikeArr, countedBallArr);
    });
  }

  countStrike(userArr) {
    const countedStrikeArr = this.comArr.filter((element, index, array) => {
      return array[index] === userArr[index];
    });
    return countedStrikeArr;
  }

  countBall(userArr, countedStrikeArr) {
    const comArrWithoutStrike = this.comArr.filter((element) => {
      return !countedStrikeArr.includes(element);
    });
    const countedBallArr = comArrWithoutStrike.filter((element) => {
      return userArr.includes(element);
    });

    return countedBallArr;
  }

  printJudgemnet(countedStrikeArr, countedBallArr) {
    const countedStrike = countedStrikeArr.length;
    const countedBall = countedBallArr.length;
    if ((countedStrike && countedBall) > 0) {
      MissionUtils.Console.print(`${countedBall}볼 ${countedStrike}스트라이크`);
    } else if (countedStrike > 0 && countedBall === 0) {
      MissionUtils.Console.print(`${countedStrike}스트라이크`);
    } else if (countedStrike == 0 && countedBall > 0) {
      MissionUtils.Console.print(`${countedBall}볼`);
    } else if ((countedStrike && countedBall) === 0) {
      MissionUtils.Console.print("낫싱");
    }
    if (countedStrike === 3) {
      this.printCorrect();
    } else {
      return this.responseUserInput();
    }
  }

  restartOrExit(answer) {
    if (answer === "1") {
      this.comArr = [];
      this.play();
    } else if (answer === "2") {
      MissionUtils.Console.close();
    }
  }

  printCorrect() {
    MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    MissionUtils.Console.readLine(
      "게임을 새로 시작하시려면 1, 종료하시려면 2를 입력하세요.\n",
      (answer) => this.restartOrExit(answer)
    );
  }

  play() {
    this.getRandomComputerArr();
    this.responseUserInput();
  }
}

module.exports = App;
