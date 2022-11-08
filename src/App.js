const MissionUtils = require("@woowacourse/mission-utils");



class App { 
  constructor(input) {
    this.strike = 0;
    this.ball = 0;
    this.resultString = "";
    this.input = input;
    this.randomNumber = [,,];
  }
  
  play() {
    this.resultString = "";
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.createRandomNumber();
    this.setInput();
    return this.resultString;
  }

  
createRandomNumber() {
  for(var i = 0; i < 3; i++) {
    (this.randomNumber).push(MissionUtils.Random.pickNumberInRange(1, 9));
  }
}
setInput() {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    this.numberCheck(this.input);
  });
}

numberCheck(input) {
  if(typeof(input) !== "number")
    throw new Error('숫자를 입력해주세요');
  if(input.length !== 3)
    throw new Error('숫자 3자리가 아닙니다.');
  if(input[0] < 0)
    throw new Error('첫번째 자리에 음수가 입력됨');
  if(input[1] < 0)
    throw new Error('두번째 자리에 음수가 입력됨');
  if(input[2] < 0)
    throw new Error('세번째 자리에 음수가 입력됨');
  this.judgement(input);

}

judgement(input) {
  var comfirmStrike = false;
  for(var i = 0; i < 3; i++) {
    comfirmStrike = false;
    strikeCompare(input[i],randomNumber[i]);
    if(!comfirmStrike) ballCompare(input[i]);
  }
  this.createResultString();
}

strikeCompare(input, randomNumber) {
  if(input === randomNumber){
    this.strike++;
    comfirmStrike = true;
  }
    
}

ballCompare(input) {
  var randomString = randomNumber.toString();
  for(var i = 0; i < 3; i++) {
    if(randomString.includes(input)) this.ball++;
  }
}

createResultString() {
  if(strike > 0)
    resultString += `${this.strike}스트라이크 `;
  if(ball > 0)
    resultString += `${this.ball}볼 `;
  if(strike === 0 && ball === 0)
    resultString += "낫싱";
  this.resultString = this.resultString.replace(/\s*$/, "");
  this.announceResult();
}

announceResult() {
  var commandNumber;
  MissionUtils.Console.print(result);
  if(strike === 3){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (commandNumber) => {gameCommand(commandNumber)});
  }
  else{
    this.setInput();
  }
}

gameCommand(commandNumber) {
  if(commandNumber === 1)
    this.play();
  if(commandNumber === 2) {
    MissionUtils.Console.print("게임 종료");
  }
}

}


module.exports = App;

