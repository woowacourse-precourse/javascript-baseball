import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  play() {}
  computer()
  
  
}

function computer() {
  if(CHECK_ANSWER){break}
  const COM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9, 3);
  console.log(COM_NUMBER)
}
module.exports = App;
