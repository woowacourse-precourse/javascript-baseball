const MissionUtils = require("@woowacourse/mission-utils");

const BALL_COUNT = [1,2,3]; // 3자리 숫자 비교를 위한 횟수를 담은 배열 

function MakeDef(def){
while (def.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!def.includes(number)) {
    def.push(number);
  }
  }
  return def;
}

function digit(atk, def,count) {
  count=0;
  for (let i = 0; i < 3; i++) {
    if (def.includes(atk[i])) {
      count++;
    }
  }
  console.log(count);
}

class App {
  play() {
    const DEF_NUM =[];
    MakeDef(DEF_NUM);
    MissionUtils.Console.print(DEF_NUM);
    // const atkNum =[];
    // while(atkNum.length <3){
    //   const num = MissionUtils.Console.readLine((answer)=>{answer});
    // }
  }
}
const app = new App();
app.play();

module.exports = App;
