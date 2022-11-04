const MissionUtils = require("@woowacourse/mission-utils");


class App {

  play() {

  }

  getRandomThreeDigitsNumber(){
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3)
    return Number(number.join(''))
  }

}

module.exports = App;
