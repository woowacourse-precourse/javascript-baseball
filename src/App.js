function checkInput(input){
  let newArray = [];
  if (isNaN(input)){
    return false;
  }
  for (let i = 0;  i < input.length; i++){
    if(!newArray.includes(input[i])){
      newArray.push(input[i]);
    } else{
      return false;
    }
  }
  return true;
}

function startGame(){
  const computer = pickComputerNumber();
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
    const userInputArray = [...userInput];
    if (checkInput(userInputArray)){
      getHint(userInputArray, computer);
    } else {
      MissionUtils.Console.print('숫자가 올바르지 않습니다. 다시입력해주세요 !');
      startGame();
    }
    MissionUtils.Console.close();
  });
}

function getHint(){
  let hint = '';
  return hint;
}

function endGame(){
  console.log()
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
    if (answer === '1'){
      startGame();
    } else if (answer === '2'){
      MissionUtils.Console.close();
      return;
    } else{
      MissionUtils.Console.print('다시 입력해주세요 !');
      endGame();
    }
  });
}


function pickComputerNumber() {
  // const computer = [];
  // while (computer.length < 3) {
  //   const number = MissionUtils.Random.pickNumberInRange(1, 9);
  //   if (!computer.includes(number)) {
  //     computer.push(number);
  //   }
  // }
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
}


class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    startGame();
    // console.log('start game !');
    // const MissionUtils = require("@woowacourse/mission-utils");
    // console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

    // MissionUtils.Console.close();
  
  }
  
}

const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();
// app.play();
// endGame();
console.log(checkInput("123"));
// pickComputerNumber();
module.exports = App;
