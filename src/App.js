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

const ballCount = (computer,user) => {
  let count = 0;
  computer.forEach((number,index) => {
    if(user.includes(number) && number !== Number(user[index])) {
      count++
    }
  },0)
  return count;
}

const strikeCount = (computer,user) => {
  let count = 0;
  computer.forEach((number,index) => {
    if(user.includes(number) && number === Number(user[index])) {
      count++
    }
  },0)
  return count;
}