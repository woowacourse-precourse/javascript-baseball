const MissionUtils = require("@woowacourse/mission-utils");

function generateRandomNumbers(){
  const numberArray= [];
  while (numberArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numberArray.includes(number)) {
      numberArray.push(number);
    }
  }
  return numberArray;
}

function getGuess(){
  var guess = [];
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    guess = validationCheck(answer);
  });
  return guess;
}

function validationCheck(answer){
  const digitsOnly = string => [...string].every(c => '123456789'.includes(c))
  if(answer.length != 3){ //Length should be 3
    throw new Error();
  }
  else if(!digitsOnly(answer)){ //Input should be valid number
    throw new Error();
  }
  else if(answer[0] == answer[1] || answer[1] == answer[2] || answer[2] == answer[0]){ //Input should be 3 different numbers
    throw new Error();
  }
  else{
    return answerToIntArr(answer);
  }  
}

function answerToIntArr(inputs){
  return [Number(inputs[0]),Number(inputs[1]),Number(inputs[2])];
}

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
  play() {
    this.startGame();
  }
  startGame() {
    var computer = generateRandomNumbers();
    var guess = getGuess();
  }
}

module.exports = App;
