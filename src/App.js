const MissionUtils = require("@woowacourse/mission-utils");

class App {
  pushUniqueNumber(arr, num) {
    num = String(num);
    if (!arr.includes(num)) {
      return arr.push(num);
    }
  }

  getRandomComputerArr() {
    let randomComputerArr = [];
    while (randomComputerArr.length < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      this.pushUniqueNumber(randomComputerArr, randomNumber);
    }
    return randomComputerArr;
  }

  pushUserInput(arr, num) {
    for (let i = 0; i < 3; i++) {
      arr.push(num[i]);
    }
  }

  responseUserInput() {
    const comArr = this.getRandomComputerArr();
    console.log(comArr);
    let userInputArr = [];
    MissionUtils.Console.readLine("숫자를 입력하세요: ", (answer) => {
      this.pushUserInput(userInputArr, answer);
      const countedStrikeArr = this.countStrike(comArr, userInputArr);
      const countedBallArr = this.countBall(
        comArr,
        userInputArr,
        countedStrikeArr
      );
    });
  }

  countStrike(comArr, userArr) {
    const countedStrikeArr = comArr.filter((element, index, array) => {
      return array[index] === userArr[index];
    });
    return countedStrikeArr;
  }

  countBall(comArr, userArr, countedStrikeArr) {
    const comArrWithoutStrike = comArr.filter((element) => {
      return !countedStrikeArr.includes(element);
    });
    const countedBallArr = comArrWithoutStrike.filter((element) => {
      return userArr.includes(element);
    });

    return countedBallArr;
  }

  play() {
    this.responseUserInput();
  }
}
const app = new App();
app.play();

module.exports = App;
