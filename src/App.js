const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let computer = this.makeComputerNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playOneRound(computer);
  }

  playOneRound(computer) {
    let strike = 0;
    let ball = 0;
    let numbers = "";
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (num) => {
      numbers = num;
      this.checkUserNumber(numbers);
      numbers = [...numbers].map(Number);
      strike = this.checkStrike(computer, numbers);
      ball = this.checkBall(computer, numbers);
      this.printStrikeBall(strike, ball);

      if (this.checkGameFinish(strike)) {
        this.replayBaseballGame(computer);
      } else {
        this.playOneRound(computer);
      }
    });
  }
  checkGameFinish(strike) {
    if (strike === 3) {
      return true;
    } else {
      return false;
    }
  }

  replayBaseballGame(computer) {
    MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (num) => {
        if (num === "1") {
          computer = this.makeComputerNumber();
          this.playOneRound(computer);
        } else if (num === "2") {
          MissionUtils.Console.close();
        } else {
          throw new Error("잘못된 입력입니다.");
        }
      }
    );
  }

  makeComputerNumber() {
    const temp = [];
    while (temp.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!temp.includes(number)) {
        temp.push(number);
      }
    }
    return temp;
  }

  checkUserNumber(numbers) {
    if (numbers.length !== 3) {
      throw new Error(`3자리 숫자만 입력 가능합니다. abc${numbers}abc`);
    } else if (Number(numbers) < 0)
      throw new Error("음수는 입력할 수 없습니다.");
    else if (typeof Number(numbers) !== "number")
      throw new Error("숫자가 아닙니다.");
    else return;
  }
  printStrikeBall(strike, ball) {
    if (strike !== 0 && ball !== 0)
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    else if (strike === 0 && ball !== 0)
      MissionUtils.Console.print(`${ball}볼`);
    else if (strike !== 0 && ball === 0)
      MissionUtils.Console.print(`${strike}스트라이크`);
    else if (strike === 0 && ball === 0) MissionUtils.Console.print(`낫싱`);
  }

  checkStrike(computer, numbers) {
    return numbers.filter((ele, idx) => ele === computer[idx]).length;
  }

  checkBall(computer, numbers) {
    return numbers.filter(
      (ele, idx) => computer.includes(ele) && computer.indexOf(ele) !== idx
    ).length;
  }
}

const app = new App();
app.play();

module.exports = App;
