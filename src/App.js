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

function readData(target){
  let isAnswer = false;

  while(!isAnswer){
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) =>{
      isAnswer = handleData(answer, target);
    });
  }
}




class App {
  play() {
    MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
    let isRepeat = true;

    while(isRepeat){
      const target = makeTarget();
      readData(target);



    }
  }
}


const app = new App();
app.play();



module.exports = App;
