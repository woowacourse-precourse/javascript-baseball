function initRandom(MissionUtils){
  const computer = [];
  while(computer.length < 3){
    const number = MissionUtils.Random.pickNumberInRange(1,9);
    if(!computer.includes(number)){
      computer.push(number);
    }
  }
  return computer;
}

class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    start: while(true){
      console.log("숫자 야구 게임을 시작합니다.");
      //1. 컴퓨터가 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
      const computer = initRandom(MissionUtils);
      
    }
  }
}
module.exports = App;
