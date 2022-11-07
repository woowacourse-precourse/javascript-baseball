const MissionUtils = require("@woowacourse/mission-utils");

function makeNewRandNum() {
  const randNum = MissionUtils.Random.pickNumberInRange(1, 9)
  return randNum
}
  
function makeComputerRandNums() {
  const randNumsArr = []
  while(true) {
    if(randNumsArr.length===3) break;
    const newNum = makeNewRandNum();
    if(randNumsArr.includes(newNum)) continue;
    randNumsArr.push(newNum);
  }
  // console.log(randNumsArr);
  return randNumsArr;
}