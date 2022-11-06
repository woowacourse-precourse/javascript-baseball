const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("../const/Printexplain.js")
class App {
  constructor(){
    MissionUtils.Console.print(Notice.START_GAME)
    this.AnswerNumber = this.generateRandomnumber()
  }
  play() {}
  generateRandomnumber(){
    const Randomnumber = [];
    while (Randomnumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!Randomnumber.includes(number)) {
        Randomnumber.push(number);
        }
      }
      return [...Randomnumber].join("");
  }
}

module.exports = App;
