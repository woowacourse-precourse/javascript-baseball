const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let computerNumber = this.setComputerNumber();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      let userNumber = this.setUserNumber();
      let compareResult = this.compareNumbers(computerNumber, userNumber);
      let restart = this.restartGame(compareResult);
      if (restart == "1") computerNumber = this.setComputerNumber();
      else if (restart == "2") break;
      else continue;
    }
  }

  setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  setUserNumber() {
    let userNumber = "";
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      userNumber = answer;
    });

    if (userNumber.length !== 3) throw "숫자 입력은 3자리만 가능합니다";
    else if (isNaN(userNumber)) throw "숫자가 아닙니다";
    else if (Number(userNumber) < 0) throw "음수를 입력했습니다";
    else return userNumber;
  }

  compareNumbers(computerNumber, userNumber) {
    let ball = 0;
    let strike = 0;
    let result = "";
    for (let i = 0; i < computerNumber.length; i++) {
      let num = Number(userNumber[i]);
      if (computerNumber[i] == num) strike++;
      if (computerNumber[i] != num && computerNumber.includes(num)) ball++;
    }

    if (ball === 0 && strike === 0) result = "낫싱";
    if (ball === 0 && strike !== 0) result = `${strike}스트라이크`;
    if (ball !== 0 && strike === 0) result = `${ball}볼`;
    if (ball !== 0 && strike !== 0) result = `${ball}볼 ${strike}스트라이크`;

    this.printResult(result);

    return result;
  }

  printResult(result) {
    MissionUtils.Console.print(result);

    if (result == "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }

  restartGame(compareResult) {
    if (compareResult == "3스트라이크") {
      MissionUtils.Console.print(
        "게임을 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      let restart = "";
      MissionUtils.Console.readLine("", (answer) => {
        if (answer != "1" && answer != "2") throw "잘못 입력하셨습니다.";

        restart = answer;
      });

      return restart;
    } else return;
  }
}

module.exports = App;