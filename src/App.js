const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
  }
  play() { 
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.random();
  }
  setRandomNumberComputer(){
    let computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(computer).join("");
  }
  random(){
    let computerNumber = this.setRandomNumberComputer();
    this.compare(computerNumber);
  }
  compare(number){
    this.inputUserNumber(number);
  }
  calculateBall(comNumber, userNumber){
    let check = 0;

    //ball
    comNumber.split("").forEach((num) => {
      if (userNumber.includes(num)) {
        check++;
      }
    });

    return check;
  }
  calculateStrike(comNumber, userNumber){
    let check2 = 0;
    //strike
    for(let num = 0; num < 3; num++){
      if (userNumber[num] === comNumber[num]) {
        check2++;
      }
    }
    return check2;
  }
  compareBothNumber(randomNum, userNum){
    const strike = this.calculateStrike(randomNum, userNum);
    const ball = this.calculateBall(randomNum, userNum) - strike;

    let pass = false;

    if(strike === 0 && ball === 0){
      MissionUtils.Console.print('낫싱');
    }else if(strike === 3){
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      pass = true;
    }else if(strike > 0 && ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    else if(strike === 0) MissionUtils.Console.print(`${ball}볼`);
    else MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);


    if(pass == true) this.finishInput();
    else this.compare(randomNum);
  }
  inputUserNumber(answer){
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const userInNumber = validateNumber(userInput);
      this.compareBothNumber(answer, userInNumber);
    });
  }
  finishInput() {
    let result;
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (number) => {
      if(validateResult(number)){
        result = number;
      }
    });
    if(result == 1){
      this.random();
    }
    else{
      MissionUtils.Console.close();
    }
  }
}

function validateResult(number){
  if(number !== "1" && number !== "2") {
    throw new Error("1이나 2가 아닌 다른 숫자가 입력되었습니다.");
  }
  return number;
}
function validateNumber(number){
  if (number.length !== 3) throw new Error("입력한 숫자가 3개가 아닙니다.");
  if (new Set(number).size !== 3) throw new Error("중복된 숫자가 있습니다.");
  number.split("").map((number) => {
    if(!(parseInt(number, 10) >= 1 && parseInt(number, 10) <= 9)) throw new Error("숫자가 아닌 문자가 있습니다.");
  });
  return number;
}

module.exports = App;


