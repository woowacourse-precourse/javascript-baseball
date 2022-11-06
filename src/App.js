const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("../const/Printexplain.js")
class App {
  constructor(){
    MissionUtils.Console.print(Notice.START_GAME)
    this.AnswerNumber = this.generateRandomnumber()
  }
  play() {
    this.start()
  }
  start(){
    MissionUtils.Console.readLine(Notice.INPUT_NUM,(input) => {
      this.exceptionThrow(input)

    });
  }
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
  exceptionThrow(num){
    if (num.length !=3){
      throw Notice.THROW_NOTICE
    }
    else if(num.match(/0/)){
      throw Notice.THROW_NOTICE
    }
    else if (num.match(/D/)){
      throw Notice.THROW_NOTICE
    }
    else if (new Set(num).size!=3){
      throw Notice.THROW_NOTICE
    }
    return true
  }
}

module.exports = App;
