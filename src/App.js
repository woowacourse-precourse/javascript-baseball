const MissionUtils = require("@woowacourse/mission-utils");

const DEF_NUM =[];
const ATK_NUM =[];
let ballCount = 0
let strikeCount = 0;

function GameStart(){
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다")
}

function MakeDef(){
while (DEF_NUM.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1,9,3);
  if (!DEF_NUM.includes(number)) {
    DEF_NUM.push(number);
  }
  }
  return DEF_NUM;
}
 function MakeAtk(){
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(answer)=>{
    for(let i=0;i<3;i++){
      ATK_NUM.push(parseInt(answer[i],10));
    }
  });

    setTimeout(findError,0);
  return ATK_NUM;
}

function getBall() {
  for (let i = 0; i < 3; i++) {
      if (DEF_NUM.includes(ATK_NUM[i])) {
        ballCount++;
      }
  }
  return ballCount;
}//ball 

function getStrike() {
  for (let i = 0; i < 3; i++) {
    if (ATK_NUM[i] === DEF_NUM[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
}//strike

function findError(){
  if(ATK_NUM.length !== 3){
    throw "3자리 수를 입력하세요";
  }
    for(let i=0;i<3;i++){
     if(typeof ATK_NUM[i] !== Number){
      throw "문자가 아닌 숫자를 입력하세요";
     }else if(ATK_NUM.indexOf(ATK_NUM[i])!==i || ATK_NUM[i]===0){
      throw "0을 포함하지않은 중복되지않는 숫자를 입력하세요";
     }
    }
      

}
function Gaming(){
    getStrike();
    getBall();
    
  if(strikeCount===0 && ballCount===0){
    MissionUtils.Console.print("낫싱");
  }else{
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }
  strikeCount=0;
  ballCount=0;
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
  start(){
    GameStart();
  }
  play() {
    MakeDef();
    MakeAtk();
    while(strikeCount<3){ 
    setTimeout(Gaming,0);
    }
  }    
  finish(){
      restartOrEnd();
  }  
}
const app = new App();
app.start();
app.play();

module.exports = App;
