const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  getRandomThreeDigitsNumber() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return Number(number.join(""));
  }

  readUserInputValue() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (value) => {
      //TODO - 입력한 값이 유효한지 확인하는 기능
      return value;
    });
  }

  getStrikeCount(randomNum, inputNum) {
    const randomNumList = randomNum.toString().split("");
    const inputNumList = inputNum.toString().split("");

    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (randomNumList[i] === inputNumList[i]) {
        strike += 1;
      }
    }

    return strike;
  }

  getBallCount(randomNum, inputNum) {
    const randomNumList = randomNum.toString().split("");
    const inputNumList = inputNum.toString().split("");
    let ball = 0;
    for (let index = 0; index < 3; index++) {
      const matchNumberIndex = inputNumList.indexOf(randomNumList[index]);
      if (
        matchNumberIndex !== -1 && matchNumberIndex !== index
      ) {
        ball += 1;
      }
    }
    return ball;
  }
}


module.exports = App;
