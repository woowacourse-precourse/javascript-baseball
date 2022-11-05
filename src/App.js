const MissionUtils = require("@woowacourse/mission-utils");

class App {
  START_NUM = 1;
  END_NUM = 9;

  play() {
    let randomNums = [1, 2, 3];

    while (randomNums.length !== 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(
        this.START_NUM,
        this.END_NUM
      );

      if (!randomNums.includes(randomNum)) {
        randomNums = [...randomNums, randomNum];
      }
    }

    let isFinished = false;
    while (!isFinished) {
      let input = "";
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answers) => {
        input = answers;
      });
      let result = {};

      randomNums.forEach((randomNum, i) => {
        if (randomNum === +input[i]) {
          result.strike = (result.strike ?? 0) + 1;
        } else if (randomNums.includes(+input[i])) {
          result.ball = (result.ball ?? 0) + 1;
        }
      });

      let str = "";
      MissionUtils.Console.print(input);
      MissionUtils.Console.print(result);
      if (result.strike && result.ball) {
        str = `${result.strike}스트라이크 ${result.ball}볼`;
      } else if (result.strike && !result.ball) {
        str = `${result.strike}스트라이크`;
      } else if (!result.strike && result.ball) {
        str = `${result.ball}볼`;
      } else {
        str = `낫싱`;
      }

      MissionUtils.Console.print(str);
      if (result.strike === 3) isFinished = true;
    }
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
