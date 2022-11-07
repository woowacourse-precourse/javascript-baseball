const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerNum, userNum){
    this.computerNum = computerNum;
    this.userNum = userNum;
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

function compareBothNumber(randomNumber, userNumber){

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
