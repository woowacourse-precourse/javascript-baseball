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

  return printResult([strike,ball]);
}

function printResult(countArr){
  const [strike, ball] = countArr;

  if(strike === 0 && ball===0){
    Console.print("낫싱");
    return false;
  }
  else if(ball !==0 && strike===0){
    Console.print(`${ball}볼`);
    return false;
  }
  else if(ball ===0 && strike !==0){
    Console.print(`${strike}스트라이크`);
    if(strike === 3) return true;
    else return false;
  }
  else if(ball !==0 && strike !==0){
    Console.print(`${ball}볼 ${strike}스트라이크`);
    return false;
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
      Console.print(err);
      process.exit();
    }



  }
}



const app = new App();
app.play();



module.exports = App;
