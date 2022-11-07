const MissionUtils = require("@woowacourse/mission-utils");

function makeTarget() {
  const tempArr = [];

  while (tempArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!tempArr.includes(number)) {
      tempArr.push(number);
    }
  }

  return [...tempArr];
}

function readData(target) {
  let isAnswer = false;

  while (!isAnswer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      isAnswer = handleData(input, target);
    });
  }
}

function handleData(inputArr, targetArr) {
  let [strike, ball] = [0,0];

  inputArr.forEach((input,idx)=>{
    const targetIdx = targetArr.findIndex(target => target === input);
    if(targetIdx === idx){
      strike += 1;
    }
    else if(targetIdx !== -1){
      ball += 1;
    }
  })

  return makeResult([strike,ball]);
}

function makeResult(countArr){
  

}



class App {
  play() {

    try {
      MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
      let isRepeat = true;

      while (isRepeat) {
        const target = makeTarget();
        readData(target);
        isRepeat =false;
        MissionUtils.Console.close();
      }
    } catch (err) {

    }



  }
}



const app = new App();
app.play();



module.exports = App;
