const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerNum, userNum, strike, ball, none, check){
    this.computerNum = computerNum;
    this.userNum = userNum;
    this.strike = strike;
    this.ball = ball;
    this.none = none;
    this.check = check;
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

function inputMyNumber(){
  let myNumber;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
    //유효한 숫자인지 체크
  });

  return myNumber;
}

let isFinish = 1;
const app = new App();

MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
while(isFinish == 1){
  app.play();
  app.compare();
}

//종료


module.exports = App;
