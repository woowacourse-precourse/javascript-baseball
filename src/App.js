const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.setRandNum();
    this.userInput();
  }


  setRandNum() {
  const randNum = [];
  while (randNum.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randNum.includes(number)) {
      randNum.push(number);
    }
  }
  MissionUtils.Console.print('숫자 '+ randNum[0]+ randNum[1]+ randNum[2]);
  };

  userInput() {

  };
};

const app = new App();
app.play();


module.exports = App;
