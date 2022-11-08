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
  compareBothNumber(randomNumber, userNumber){
    let random = numberToArr(randomNumber);
    let user = numberToArr(userNumber);
 
    const result = [0, 0];
  
    if(random[0] == user[0]) result[0]++;
    else{
      if(random[0] == user[1]) result[1]++;
      else if(random[0] == user[2]) result[1]++;
    }
    if(random[1] == user[1]) result[0]++;
    else{
      if(random[1] == user[2]) result[1]++;
    }
    if(random[2] == user[2]) result[0]++;

    return result;

  }
  compareSettingNumber(randomNum, userNum){
    const [s, b] = this.compareBothNumber(randomNum, userNum);
    this.compareResult(s, b);
  }
  inputUserNumber(answer){
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      if(validateNumber(userInput)){
        this.compareSettingNumber(answer, userInput);
      }
    });
  }
  compareResult(strike, ball){
    let pass = this.outputResultCompare(strike, ball);
    if(pass == true){
      this.finishInput();
    }
    else{
      this.compare();
    }
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
      this.reset();
      this.random();
    }
    else{
      MissionUtils.Console.close();
    }
  }
  reset(){
    this.computerNum = 0;
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
    throw new Error("올바른 숫자가 아닙니다(1과 2만 입력하시오).");
  }
  return true;
}
function validateNumber(number){
  if(number.length != 3){
    throw new Error("올바른 숫자를 입력해주세요(3자리 수).");
  }
  if(!(checkStr.test(number))){
    throw new Error("올바른 숫자를 입력해주세요(1-9 사이, 문자 제외).");
  }

  return true;
}

function numberToArr(number){
  var numArray = [];
  do{
    numArray.push(number%10);
    number = Math.floor(number/10);
  }while(number > 0);
  
  return numArray;
}


const app = new App();
app.play();

module.exports = App;
