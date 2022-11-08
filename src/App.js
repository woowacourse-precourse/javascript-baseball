const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
  }
  play() { 
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.random();
  }
  setRandomNumberComputer(){
    const computer = [];
    while(computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer;
  }
  random(){
    const computerNumber = this.setRandomNumberComputer();
    this.compare(computerNumber);
  }
  compare(number){
    this.inputUserNumber(number);
  }
  calculateBall(comNumber, userNumber){
    let check = 0;

    //ball
    comNumber.forEach((num) => {
      if (userNumber.includes(num)) {
        check++;
      }
    });

    return check;
  }
  calculateStrike(comNumber, userNumber){
    let check2 = 0;
    //strike
    comNumber.forEach((num, i) => {
      if (userNumber[i] === num) {
        check2++;
      }
    });
    return check2;
  }
  compareBothNumber(randomNum, userNum){
    const strike = this.calculateStrike(randomNum, userNum);
    const ball = this.calculateBall(randomNum, userNum) - strike;

    let ok = this.outputResultCompare(strike, ball);
    if(ok == true) this.finishInput();
    else this.compare(randomNum);
  }
  inputUserNumber(answer){
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      if(validateNumber(userInput)){
        this.compareBothNumber(answer, userInput);
      }
    });
  }
  outputResultCompare(strike, ball){
    let pass = false;
    if(strike === 0 && ball === 0){
      MissionUtils.Console.print('낫싱');
    }
    if(strike === 3){
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      pass = true;
    }
    if(strike > 0 && ball > 0){
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    else if(strike > 0 && ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    else if(strike === 0 && ball > 0) MissionUtils.Console.print(`${ball}볼`);

    return pass
  }
  finishInput() {
    let result;
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (number) => {
      if(validateResult(number)){
        result = number;
      }
    });
    if(this.result == 1){
      this.play();
    }
    else{
      MissionUtils.Console.close();
    }
  }
}

function validateResult(number){
  if(number != 1 && number != 2){
    throw new Error("올바른 숫자가 아닙니다(1과 2만 입력하시오).");
  }
  return true;
}
function validateNumber(number){
  const numberStr = number.toString();
  let checkStr = /^[1-9]+$/;
  if(number.length !== 3){
    throw new Error("올바른 숫자를 입력해주세요.");
  }
  numberStr.split('').forEach((n) => {
    if (!(n.charCodeAt(0) >= 49 && n.charCodeAt(0) <= 57)) {
      throw new Error("올바른 숫자를 입력해주세요.");
    }
  });

  return true;
}


const app = new App();
app.play();

module.exports = App;
