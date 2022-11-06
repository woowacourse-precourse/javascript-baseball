const MissionUtils = require("@woowacourse/mission-utils");


function makeTarget(){
  const tempArr = [];

  while(tempArr.length<3){
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!tempArr.includes(number)){
      tempArr.push(number);
    }
  }

  return [...tempArr];
}




class App {
  play() {
    MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
    let isRepeat = true;

    while(isRepeat){
      const target = makeTarget(););

    }
  }
}


const app = new App();
app.play();



module.exports = App;
