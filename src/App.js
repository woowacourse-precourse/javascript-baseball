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
  getUserInputArray() {
    let userInputArray = [];
    MissionUtils.Console.readLine("숫자를 입력하세요:", (answer) => {
      this.pushUserInput(userInputArray, answer);
    });

    return userInputArray;
  }

  play() {}
}
// const app = new App();
// app.play();

module.exports = App;
