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

function endsGame(){
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  MissionUtils.Console.readLine('', (answer) => {
    if(answer == '1' || answer == 1){
      return false;
    }
    else if(answer == '2' || answer == 2){
      return true;
    }
    else{
      throw new Error("Invalid input(Should be 1 or 2 : " + answer);
    }
  });
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    var computer = generateRandomNumbers();
    var isGameEnd = false;
    while(!isGameEnd){
      var guess = "";
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        guess = validationCheck(answer);
      });
      var strike = countStrike(guess, computer);
      var ball = countBall(guess, computer);
      if(strike == 3){
        MissionUtils.Console.print("3스트라이크");
        isGameEnd = endsGame();
        computer = generateRandomNumbers();
      }
      else{
        printResult(strike, ball);
      }
    }
    return 1;
  }
}

module.exports = App;
