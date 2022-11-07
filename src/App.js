const MissionUtils = require("@woowacourse/mission-utils");

class App {
  pushUniqueNumber(arr, num) {
    num = String(num);
    if (!arr.includes(num)) {
      return arr.push(num);
    }
  }

  getRandomComputerArray() {
    let randomComputerArray = [];
    while (randomComputerArray.length < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      this.pushUniqueNumber(randomComputerArray, randomNumber);
    }
    return randomComputerArray;
  }

  pushUserInput(arr, num) {
    for (let i = 0; i < 3; i++) {
      arr.push(num[i]);
    }
  }

  responseUserInput() {
    let userInputArray = [];
    MissionUtils.Console.readLine("숫자를 입력하세요: ", (answer) => {
      this.pushUserInput(userInputArray, answer);
      //판별함수
      //재시작, 종료
    });
  }

  countStrike(comArr, userArr) {
    const countedStrikeArr = comArr.filter((element, index, array) => {
      return array[index] === userArr[index];
    });
    const COUNTED_STRIKE = countedStrikeArr.length;
    return COUNTED_STRIKE;
  }

  play() {}
}
const app = new App();
app.play();

module.exports = App;
