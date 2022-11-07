const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console,MissionUtils.Random];

function makeTarget() {
  const tempArr = [];

  while (tempArr.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!tempArr.includes(number)) {
      tempArr.push(number);
    }
  }

  return [...tempArr];
}

function readData(targetArr) {
  let isAnswer = false;

  while (!isAnswer) {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {

      const inputArr = [...input].map(Number);

      isAnswer = handleData(inputArr, targetArr);
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
  const [strike, ball] = countArr;

  if(strike === 0 && ball===0){

  }

}



class App {
  play() {

    try {
      Console.print('숫자 야구게임을 시작합니다.');
      let isRepeat = true;

      while (isRepeat) {
        const targetArr = makeTarget();
        readData(targetArr);
        isRepeat =false;
        Console.close();
      }
    } catch (err) {

    }



  }
}



const app = new App();
app.play();



module.exports = App;
