const MissionUtils = require("@woowacourse/mission-utils");

class App {
  START_NUM = 1;
  END_NUM = 9;

  generateRandomNums() {
    let randomNums = [];

    while (randomNums.length !== 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(
        this.START_NUM,
        this.END_NUM
      );

      if (!randomNums.includes(randomNum)) {
        randomNums = [...randomNums, randomNum];
      }
    }
    return randomNums;
  }

  compareToUserInput(randomNums) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answers) => {
      let result = {};

      randomNums.forEach((randomNum, i) => {
        if (randomNum === +answers[i]) {
          result.strike = (result.strike ?? 0) + 1;
        } else if (randomNums.includes(+answers[i])) {
          result.ball = (result.ball ?? 0) + 1;
        }
      });

      let str = "";
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
      if (result.strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.close();
      } else {
        this.compareToUserInput(randomNums);
      }
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const randomNums = this.generateRandomNums();

    this.compareToUserInput(randomNums);
  }
}

const app = new App();
app.play();

module.exports = App;
