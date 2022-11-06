const MissionUtils = require("@woowacourse/mission-utils");
// USER 수 입력 
const userNum = "123" 

function makeRandom() {
  let answer = new Array();
 
  while (answer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}


