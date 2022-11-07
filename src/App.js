const MissionUtils = require("@woowacourse/mission-utils");

var strike;
var ball;
var resultString = "";
var input;
var randomNumber;
class App {
  randomNumber = createRandomNumber();
  play() {
    const app = new App();
    input = setInput();
    numberCheck(input);
    judgement(input);
    createResultString();
    announceResult();
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
  return inputNumber;
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

function createResultString() {
  if(strike > 0)
    result += (result) + "스트라이크 ";
  if(ball > 0)
    result += (result) + "볼 ";
  if(strike === 0 && ball === 0)
    result += "낫싱";
}

function announceResult() {
  var commandNumber;
  MissionUtils.Console.print(result);
  if(strike === 3)
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (commandNumber) => {gameCommand(commandNumber)});
}

function gameCommand(commandNumber) {
  if(commandNumber === 1)
    app.play();
  if(commandNumber === 2)
    return 0;
}
module.exports = App;

