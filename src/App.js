const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {}
}

module.exports = App;

function computerInput(){
  const computerInputArr=[];
  while (computerInputArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1,9);
    if (!computerInputArr.includes(number)) {
      computerInputArr.push(number);
    }
  }
  return computerInputArr;
}