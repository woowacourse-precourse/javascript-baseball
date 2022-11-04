const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  pickComputerNum() {
    let computerNum = [];
    let num = MissionUtils.Random.pickNumberInRange(1, 9);
    computerNum.push(num);
    for (let digit = 1; digit < 3; digit++) {
      num = MissionUtils.Random.pickNumberInRange(1, 9);
      while (computerNum.includes(num) === 0) {
        num = MissionUtils.Random.pickNumberInRange(1, 9);
      }
      console.log(computerNum);
      computerNum.push(num);
    }
    return computerNum.join("");
  }
  getUserNum() {
    let userNum;
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      userNum = answer;
      this.print(`숫자를 입력해주세요 : ${answer}`);
    });
    return userNum;
  }
  getResult(computer, user) {
    let resultFlag = 0;
    const { strike, ball } = this.compareNums(computer, user);
    const resultSring = this.printResult(strike, ball);
    if (resultSring === "3스트라이크") {
      this.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      // MissionUtils.Console.readLine(
      //   "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      //   (answer) => {
      //     resultFlag = answer;
      //     this.print(`${answer}`);
      //   }
      // );
    }
    return resultFlag;
  }
  compareNums(computer, user) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < user.length; i++) {
      if (user[i] === computer[i]) {
        strike++;
      } else if (computer.includes(user[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }
  printResult(strike, ball) {
    let resultSring = "";
    if (ball !== 0) {
      resultSring += `${ball}볼 `;
    }
    if (strike !== 0) {
      resultSring += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) {
      resultSring = "낫싱";
    }
    this.print(resultSring);
    return resultSring;
  }
  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    let gameFlag = 0; // 0: continue 1: restart, 2: end
    while (gameFlag === 0 || gameFlag === 1) {
      const computerNum = this.pickComputerNum();
      while (gameFlag === 0) {
        const userNum = this.getUserNum();
        console.log(computerNum, userNum);
        gameFlag = this.getResult(computerNum, userNum);
      }
    }
  }
}

module.exports = App;
