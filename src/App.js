function checkInput(input){
  if(input.length !== 3){
    return false;
  }
  if (isNaN(input)){
    return false;
  }

  let newArray = [];
  for (let i = 0;  i < input.length; i++){
    if(!newArray.includes(input[i])){
      newArray.push(input[i]);
    } else{
      return false;
    }
  }
  return true;
}


function getInputIntArray(input){
  const userInputArray = [...input];
  const newArray = [];
  for (let i = 0; i < userInputArray.length; i++){
    newArray.push(parseInt(userInputArray[i]));
  }
  return newArray;
}


function startGame(computer){
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
    const userInputArray = getInputIntArray(userInput);
    let hint = '';
    if (checkInput(userInput)){
      hint = getHint(userInputArray, computer);
    } else {
      MissionUtils.Console.print('숫자가 올바르지 않습니다. 다시 입력해주세요 !');
      startGame(computer);
    }

    MissionUtils.Console.print(hint);
    if (hint === '3스트라이크'){
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      endGame();
    } else{
      startGame(computer);
    }
  });
}


function getHint(userInputArray, computer){
  let hint = '';
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < userInputArray.length; i++){
    let idx = -1;
    idx = computer.indexOf(userInputArray[i]);
    if (idx === i){
      strike++;
    } else if (idx > -1){
      ball++;
    }
  }

  if (strike || ball){
    if (ball > 0){
      hint += `${ball}볼 `;
  
    } if (strike > 0) {
      hint += `${strike}스트라이크`;
    }
  } else{
    hint = '낫싱';
  }

  return hint;
}


function endGame(){
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
    if (answer === '1'){
      app.play();
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
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}


class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = pickComputerNumber();
    startGame(computer);
  }
  
}

const MissionUtils = require("@woowacourse/mission-utils");
const app = new App();
app.play();

module.exports = App;
