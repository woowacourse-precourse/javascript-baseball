const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor () {

  }

  printStartMessage () {
    const str = "숫자 야구 게임을 시작합니다.";
    return str;
  }

  randomThreeNumbers() {
    let threeNumbers = [];
    let count = 0;
    let notFull = true;

    while(notFull) {
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!threeNumbers.includes(number)) {
        threeNumbers.push(number);
        count++;
      }
      if(count == 3) {
        notFull = false;
      }
    }

    return threeNumbers;
  }

  inputThreeNumbers() {

    let input = [];
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (line) => {
      input = line.split("").map(el => parseInt(el));

      this.checkIsNumber(input);
      this.checkInputLength(input);
      this.checkInputDuplicate(input);
    })

    return input;
  }

  checkIsNumber(input) {
    const NUMBERS = /^[1-9]+$/;

    for(let i=0; i<input.length; i++) {
      if(NUMBERS.test(input[i])) {
        throw new Error("숫자를 입력하세요.");
      }
    }
  }
  checkInputLength(input) {

    if(input.length !== 3) {
      throw new Error("세 자리 수를 입력하세요.");
    }
  }
  checkInputDuplicate(input) {
    const setInput = new Set(input);

    if(setInput < input) {
      throw new Error("서로 다른 세 수를 입력하세요.");
    }
  }

  printResult(computer, user) {
    let strike = 0;
    let ball = 0;

    let result = "";

    for(let i=0; i<user.length; i++) {
      if(user[i] === computer[i]) {
        strike++;
      }
      else if(computer.includes(user[i])){
        ball++;
      }
    }


    if(strike === 0 && ball === 0){
      result = "낫싱";
    }
    else if(strike > 0 || ball === 0) {
      result = "${strike}스트라이크";
    }
    else if(strike === 0 || ball > 0) {
      result = "${ball}볼";
    }
    else if(strike > 0 || ball > 0) {
      result = "${ball}볼 ${strike}스트라이크";
    }
  }

  play() {

    MissionUtils.Console.print(this.printStartMessage());
    let computer = this.randomThreeNumbers();
    let user = this.inputThreeNumbers();
    this.printResult(computer, user);
  }
}

module.exports = App;

