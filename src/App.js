const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerNum, userNum, strike, ball, none, check, pass, result){
    this.computerNum = computerNum;
    this.userNum = userNum;
    this.strike = strike;
    this.ball = ball;
    this.none = none;
    this.check = check;
    this.pass = pass;
    this.result = result;
  }
  play() { 
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.random();
  }
  random(){
    this.computerNum = setRandomNumberComputer();
    this.compare();
  }
  compare(){
    this.inputUserNumber();
    compareBothNumber(this.computerNum, this.userNum);
    this.compareResult();
  }
  compareResult(){
    this.pass = outputResultCompare(this.strike,this.ball,this.none,this.check);
    if(this.pass == true){
      this.finishInput();
    }
    else{
      this.compare();
    }
  }
  inputUserNumber(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      if(validateNumber(userInput)){
        userNum = userInput;
      }
    });
  }
  finishInput() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (number) => {
      if(validateResult(number)){
        this.result = number;
      }
    });

    if(this.result == 1){
      this.reset();
      this.random();
    }
    else{
      this.finish();
    }
  }
  finish(){
    MissionUtils.Console.close();
  }
  reset(){
    this.computerNum = 0;
    this.userNum = 0;
    this.strike = 0;
    this.ball = 0;
    this.none = false;
    this.check = false;
    this.result = 1;
    this.pass = false;
  }
}

function validateResult(number){
  if(number != 1 && number != 2){
    throw "올바른 숫자가 아닙니다(1과 2만 입력하시오).";
  }
  return true;
}
function validateNumber(number){
  let checkStr = /^[1-9]+$/;
  if(number.length !== 3){
    throw "올바른 숫자를 입력해주세요(3자리 수).";
  }
  if(!checkStr.test(number)){
    throw "올바른 숫자를 입력해주세요(1-9 사이, 문자 제외).";
  }
  if(new Set(number).size !== 3){
    throw "올바른 숫자를 입력해주세요(중복 제외).";
  }
  return true;
}

function setRandomNumberComputer(){
  const computer = [];
  while(computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!computer.includes(number)){
      computer.push(number);
    }
  }
  return computer;
}
function numberToArr(number){
  var numArray = [];
  do{
    numArray.push(number%10);
    number = Math.floor(number/10);
  }while(number > 0);
  
  return numArray;
}
function compareBothNumber(randomNumber, userNumber){
  const setApp = new App();
  let random = numberToArr(randomNumber);
  let user = numberToArr(userNumber);

  let strike = 0;
  let ball = 0;
  let notting = false;
  let check = false;

  if(random[0] == user[0]) strike++;
  else{
    if(random[0] == user[1]) ball++;
    else if(random[0] == user[2]) ball++;
  }
  if(random[1] == user[1]) strike++;
  else{
    if(random[1] == user[2]) ball++;
  }
  if(random[2] == user[2]) strike++;

  if(strike == 0 && ball == 0) notting = true;
  if(strike != 3 && strike > 0 && ball > 0) check = true; 

  setApp.strike = strike;
  setApp.ball = ball;
  setApp.none = notting;
  setApp.check = check;
}

function outputResultCompare(strike, ball, notting, check){
  let pass = false;
  if(notting === true){
    MissionUtils.Console.print('낫싱');
  }
  if(strike === 3){
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    let getResult = finishCheck();
    setApp2.finish(getResult);
    pass = true;
  }
  if(strike > 0 && ball > 0){
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
  else if(strike > 0 && ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
  else if(strike === 0 && ball > 0) MissionUtils.Console.print(`${ball}볼`);
  return pass
}


const app = new App();
app.play();

module.exports = App;
