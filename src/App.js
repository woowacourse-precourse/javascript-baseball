const MissionUtils = require("@woowacourse/mission-utils");

const DEF_NUM =[];
const ATK_NUM =[];
let nothingCount = 0;
function GameStart(){
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다")
}

function MakeDef(){
while (DEF_NUM.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!DEF_NUM.includes(number)) {
    DEF_NUM.push(number);
  }
  }
  return DEF_NUM;
}
 function MakeAtk(){
  let inputNum;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(answer)=>{
    // inputNum = (`${answer}`+'').split('');
    for(let i=0;i<3;i++){
      ATK_NUM.push(parseInt(answer[i],10));
    }
    console.log(ATK_NUM);
  });
  return ATK_NUM;
}

function getBall() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
      if (DEF_NUM.includes(ATK_NUM[i])) {
        count++;
      }
  }
  return count;
}//ball 

function getStrike() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (ATK_NUM[i] === DEF_NUM[i]) {
      count++;
    }
  }
  return count;
}//strike

function getNothingBall(){
  for (let i = 0; i < 3; i++) {
    if (!DEF_NUM.includes(ATK_NUM[i])) {
      nothingCount++;
    }
    return nothingCount;
}
function getNothingStrike() {
  for (let i = 0; i < 3; i++) {
    if (ATK_NUM[i] !== DEF_NUM[i]) {
      nothingCount++
    }
  }
  return nothingCount;
}
}
function Gaming(){
    let ballCount = getBall();
    let strikeCount = getStrike();
    if(nothingCount>2){
      MissionUtils.Console.print("낫싱");
      nothingCount = 0;
    }
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
}
function restartOrEnd(){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
    MissionUtils.Console.readLine((answer)=>{
    if(answer===1){
      app.play();
    }else if(answer===2){
      MissionUtils.Console.close()
    }}
   )
    
}

class App {
  prePlay(){
    GameStart();
       // 사용자 숫자 입력
  }
  play() {
    this.prePlay();
    MakeDef();
    MakeAtk();
    Gaming();
   
   
  }    
  finish(){
    if(strikeCount===3){
      restartOrEnd();
    }
  }

  
}
const app = new App();
app.play();

module.exports = App;
