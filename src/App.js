const MissionUtils = require("@woowacourse/mission-utils");

const BALL_COUNT = [1,2,3]; // 3자리 숫자 비교를 위한 횟수를 담은 배열 

function inputNumber(){
 let inputNum =  MissionUtils.Console.readLine('숫자를 입력하세요 :',(answer)=>{return answer});
  return inputNum;
}

function playBall(atkNum,defNum){
  if(atkNum !== undefined){
  if(defNum.indexOf(inputToList(atkNum)[BALL_COUNT.map(function Count(item){item})])===-1 ){
    console.log("낫싱");
  }
}
}
class App {
  play() {
    const DEF_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.print(DEF_NUM);
    let atkNum =[];
    atkNum.push(inputNumber());
    playBall(atkNum,DEF_NUM);
  }
}
const app = new App();
app.play();

module.exports = App;
