const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  play() {}

  start() {
    const computerNum = this.MakeNum();
    this.proceedGame(computerNum);
  }

  MakeNum() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number.toString())) {
        randomNumber.push(number.toString());
      }
    }
    return randomNumber;
  }
  isvalidation(userNum) {
    return true; //일단 과정검사
  }
  proceedGame(computerNum) {
    Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      const validation = this.isvalidation(userNum);
      if (validation === false) {
        return this.throwError();
      }
      const StrikeBallCount = this.isStrikeBall(userNum, computerNum);
      if (StrikeBallCount[0] !== 3) {
        return this.proceedGame(computerNum);
      }
      Console.close();
    });
  }

  isStrikeBall(userNum, computerNum) {
    let strike = 0;
    let ball = 0;
    userNum.split("").forEach((item, idx) => {
      const index = computerNum.indexOf(item);
      if (computerNum[idx] === item && index > -1) {
        return (strike += 1);
      }
      if (index > -1) {
        return (ball += 1);
      }
    });
    return [strike, ball];
  }
}

const baseBallGame = new App();
baseBallGame.start();
module.exports = App;
