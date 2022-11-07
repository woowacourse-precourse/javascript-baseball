import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerValue = [];
  }
  play() {
    this.computerValue = this.renderComputerValue();
    this.gameStart();
  }
  renderComputerValue() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let num = MissionUtils.Random.pickNumberInList([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
      if (!arr.includes(num)) arr.push(num);
    }
    console.log(arr);
  }
}

module.exports = App;
renderComputerValue();
