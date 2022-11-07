const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    var strike;
    var ball;
    
    var input = setInput();
    var randomNumber = createRandomNumber();
    numberCheck(input);
    judgement(input);
  }
}

function createRandomNumber() {
  var randomNumber = [, ,];
  for(var i = 0; i < 3; i++) {
    randomNumber[i] = MissionUtils.Random.pickNumberInRange(1, 9);
  }

  return randomNumber;
}
function setInput() {
  var inputNumber;
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
    console.log(`입력한 숫자 : ${inputNumber}`);
  });
}

function numberCheck(input) {
  if(typeof(input) !== "number")
    throw '숫자를 입력해주세요';
  if(input.length !== 3)
    throw '숫자 3자리가 아닙니다.';
  
}

function judgement(input) {
  var comfirmStrike = false;
  for(var i = 0; i < 3; i++) {
    comfirmStrike = false;
    strikeCompare(input[i],randomNumber[i]);
    if(!comfirmStrike) ballCompare(input[i]);
  }
}

function strikeCompare(input, randomNumber) {
  if(input === randomNumber){
    strike++;
    comfirmStrike = true;
  }
    
}

function ballCompare(input) {
  var randomString = randomNumber.toString();
  for(var i = 0; i < 3; i++) {
    if(randomString.includes(input)) ball++;
  }
}
module.exports = App;
