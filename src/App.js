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
function countHint(computer,guess){
  let strikeCnt = 0;
  let ballCnt = 0;
  let strikeIdx = new Array(computer.length);
  for(let idx=0; idx<computer.length; idx++){
    strikeIdx[idx]=false;
  }
  for(let idx=0; idx<3; idx++){
    // 3-1. 같은 수가 같은 자리에 있으면 1스트라이크
    if(computer[idx]==guess[idx]){
      strikeCnt+=1;
      strikeIdx[idx]=true;
    }
  }
  // 3-2. 같은 수가 다른 자리에 있으면 1볼
  for(let comIdx=0; comIdx<computer.length; comIdx++){
    let computerNum = computer[comIdx];
    for(let guessIdx=0; guessIdx<guess.length; guessIdx++){
      let guessNum = guess[guessIdx];
      if(computerNum == guessNum && comIdx != guessIdx && strikeIdx[comIdx]==false){
        ballCnt+=1;
      }
    }
  }
  return [strikeCnt, ballCnt];
}
function provideHint(computer, guess, MissionUtils){
  let count = countHint(computer,guess);
  let strikeCnt = count[0];
  let ballCnt = count[1];
  
  let strikeAns = strikeCnt + "스트라이크";
  let ballAns = ballCnt + "볼";
  let hint;
  if(strikeCnt!=0 && ballCnt==0){
    hint = strikeAns;
  }else if(strikeCnt==0 && ballCnt!=0){
    hint = ballAns;
  }else if(strikeCnt!=0 && ballCnt!=0){
    hint = strikeAns + " "+ballAns;
  }else if(strikeCnt==0 && ballCnt==0){
    // 3-3. 같은 수가 전혀 없으면 낫싱
    hint = "낫싱";
  }
  MissionUtils.Console.print(hint);
  
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
        // 3. 힌트를 제공한다.
        let ret = provideHint(computer,guess, MissionUtils);
      }
    }
  }
}
module.exports = App;
