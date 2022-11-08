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

function countStrike(guess, computer){
  var strike = 0;
  for(var i  = 0; i < 3; i++){
    if(guess[i] == computer[i]){
      strike++;
    }
  }
  return strike;
}

function countBall(guess, computer){
  var ball = 0;
  for(var i = 0; i < 3; i++){
    var j = (i+2)%3; // i-1
    var k = (i+1)%3; // i+1
    if(guess[i] == computer[j] || guess[i] == computer[k]){
      ball++;
    }
  }
  return ball;
}

function resultCheck(strike, ball){
  if(strike == 3){
    MissionUtils.Console.print("3스트라이크");
    return true;
  }
  else if(strike == 0 && ball == 0){
    MissionUtils.Console.print("낫싱");
    return false;
  }
  else if (strike == 0){
    MissionUtils.Console.print("" + ball + "볼");
    return false;
  }
  else if (ball == 0){
    MissionUtils.Console.print("" + strike + "스트라이크");
    return false;
  }
  else{
    MissionUtils.Console.print("" + ball + "볼 " + strike + "스트라이크");
    return false;
  }
}

function endsGame(){
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', command => {
    if (command === '1') {
      const app = new App();
      app.startGame();
    } 
    else if (command === '2') {
      MissionUtils.Console.close();
    }
    else throw new Error();
  },);
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
    var isCorrect = false;
    while(!isCorrect){
      var guess = getGuess();
      var strike = countStrike(guess, computer);
      var ball = countBall(guess, computer);
      if(resultCheck(strike, ball)) isCorrect = true;
    }
    endsGame();
  }
}

module.exports = App;
