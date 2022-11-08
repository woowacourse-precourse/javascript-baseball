const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  makeComputerNumber() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let computerNumberSet = new Set();

    while (computerNumberSet.size < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNumber !== 0) computerNumberSet.add(randomNumber);
    }
    return [...computerNumberSet];
  }

  userNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      let result = this.resultMessage(this.checkResult(userNumber, this.computerNumber));
      MissionUtils.Console.print(result);

      if(result !== "3스트라이크") this.userNumber();
      else {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return this.askReplay();
      }
    });
  }

  resultMessage(checkCount) {
    if (checkCount[0] == 0 && checkCount[1] == 0) return "낫싱";
    else if (checkCount[0] == 0) return `${checkCount[1]}스트라이크`;
    else if (checkCount[1] == 0) return `${checkCount[0]}볼`;
    else return `${checkCount[0]}볼 ${checkCount[1]}스트라이크`;
  }

  checkResult(userNumber, computerNumber) {
    let checkCount = [0, 0];
    
    if (userNumber.length !== 3) throw new Error("잘못된 입력입니다.");

    for(let i = 0; i < 3; i++) {
      let eachNumber = +userNumber[i];
      if (!(1 <= eachNumber && eachNumber <= 9)) throw new Error("잘못된 입력입니다.");
      else if (computerNumber[i] == eachNumber) checkCount[1]++;
      else if (computerNumber.indexOf(eachNumber) !== -1) checkCount[0]++;
    }

    return checkCount;

  }

  askReplay() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
      if (input == "1") this.play();
      else if (!(input == "2")) throw new Error("잘못된 입력입니다.");
      else MissionUtils.Console.close();

    });
  }

  play() {
    this.computerNumber = this.makeComputerNumber();
    return this.userNumber();
  }

}

const app = new App();
app.play();

module.exports = App;