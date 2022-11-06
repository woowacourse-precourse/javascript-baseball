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

function guessNumber(MissionUtils){
  let number = [];
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    // 2-1. 사용자가 잘못된 값을 입력하면 예외 발생 후 종료한다.
    if(input.length!=3){
      throw new Error("3자리 숫자를 입력하세요");
    }
    for(let val=0; val<input.length; val++){
      if(isNaN(input[val])){
        throw new Error("3자리 숫자를 입력하세요");
      }else{
        number.push(input[val]);
      }
    }
  });
  return number;
}
class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    start: while(true){
      console.log("숫자 야구 게임을 시작합니다.");
      //1. 컴퓨터가 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
      const computer = initRandom(MissionUtils);
      while(true){
        //2. 게임 플레이어가 서로 다른 3개의 숫자를 입력한다.
        const guess = guessNumber(MissionUtils);
    
      }
      
    }
  }
}
module.exports = App;
