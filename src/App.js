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
    this.random();
  }
  random(){
    this.computerNum = setRandomNumberComputer();
  }
  compare(){
    this.userNum = inputMyNumber();
    compareBothNumber(this.computerNum, this.userNum);
  }
  finish(res) {
    this.result = res;
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
  let backSign;
  let check = /^[1-2]+$/;

  if(!check.test(number)){
    backSign = false;
    throw new Error("올바른 숫자가 아닙니다(1과 2만 입력하시오).");
  }else{
    backSign = true;
  }

  return backSign;
}
function finishCheck(){
  let resultNum;
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (result) => {
    if(validateResult(result)){
      resultNum = result;
    }
  });

  return resultNum;

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

function validateNumber(number){
  let backSign;
  let checkStr = /^[1-9]+$/;
  if(number.length !== 3){
    backSign = false;
    throw new Error("올바른 숫자가 아닙니다.");
  }else{
    backSign = true;
  }
  if(!checkStr.test(number)){
    backSign = false;
    throw new Error("올바른 숫자가 아닙니다.");
  }else{
    backSign = true;
  }

  return backSign;
}
function inputMyNumber(){
  let myNumber;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
    if(validateNumber(number)){
      myNumber = number;
    }
  });

  return myNumber;
}

function outputResultCompare(){
  const setApp2 = new App();
  let strike = setApp2.strike;
  let ball = setApp2.ball;
  let notting = setApp2.none;
  let check = setApp2.check;

  if(notting == true){
    MissionUtils.Console.print("낫싱");
    setApp2.pass = false;
  }
  if(strike == 3){
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    let getResult = finishCheck();
    setApp2.finish(getResult);
    setApp2.pass = true;
  }
  if(check == true){
    MissionUtils.Console.print("%d볼 %d스트라이크", ball, strike);
    setApp2.pass = false;
  }
  else{
    if(strike > 0) MissionUtils.Console.print("%d스트라이크",strike);
    else MissionUtils.Console.print("%d볼",ball);
    setApp2.pass = false;
  }

}


let isFinish = 1;
let pass = false;
const app = new App();

MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
while(isFinish == 1){
  app.play();
  while(!pass){
    app.compare();
    outputResultCompare();
    pass = app.pass;
  }
  isFinish = app.finish;
  app.reset();
}

//종료
MissionUtils.Console.close();

module.exports = App;
