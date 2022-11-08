const MissionUtils = require("@woowacourse/mission-utils");
function generateRandomNumbers( ){
  const numberArray= [];
  while (numberArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numberArray.includes(number)) {
      numberArray.push(number);
    }
  }
  return numberArray;
}

function validationCheck(answer){
  const digitsOnly = string => [...string].every(c => '123456789'.includes(c))
  if(answer.length != 3){
    throw new Error("Invalid length (Should be 3) : " + answer.length);
  }
  else if(!digitsOnly(answer)){
    throw new Error("Invalid input (Should be a number from 1 to 9) : " + answer);
  }
  else if(answer[0] == answer[1] || answer[1] == answer[2] || answer[2] == answer[0]){
   throw new Error("Invalid input (Should be 3 different numbers) : " + answer); 
  }
  else{
    return answer;
  }  
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
    if(guess[j] == computer[j] || guess[k] == computer[k]){
      ball++;
    }
  }
  return ball;
}

function printResult(strike, ball){
  if(strike == 0 && ball == 0){
    MissionUtils.Console.print("낫싱");
  }
  else if (strike == 0){
    MissionUtils.Console.print("" + ball + "볼");
  }
  else if (ball == 0){
    MissionUtils.Console.print("" + strike + "스트라이크");
  }
  else{
    MissionUtils.Console.print("" + ball + "볼 " + strike + "스트라이크");
  }
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    var computer = generateRandomNumbers();
    var guess = "";
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      guess = validationCheck(answer);
    });
    var strike = countStrike(guess, computer);
    var ball = countBall(guess, computer);
    printResult(strike, ball);
    return 1;
  }
}

module.exports = App;
