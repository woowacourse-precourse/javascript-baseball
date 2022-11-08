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

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    var computer = generateRandomNumbers();
    var guess = "";
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      guess = validationCheck(answer);
    });
    
    return 1;
  }
}

module.exports = App;
