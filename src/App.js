const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = makeRandomNumber(MissionUtils);
  }
}

function makeRandomNumber() {
  var computer = [];
  while(computer.length < 3) {
    var number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(computer.includes(number) ? false : true) {
      computer.push(number);
    }
  }
  return computer.join('');
}

module.exports = App;
