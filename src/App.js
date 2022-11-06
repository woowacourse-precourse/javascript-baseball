const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("../const/Printexplain.js")
class App {
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
