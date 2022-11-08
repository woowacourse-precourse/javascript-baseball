const MissionUtils = require("@woowacourse/mission-utils");
const { appendFile } = require("fs");

class App {

  constructor () {

  }

  printStartMessage () {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
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
      if(!NUMBERS.test(input[i])) {
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

  getResult(computer, user) {
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

    this.printResult(result);
  }

  printResult(result) {
    if(result === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n", input => {
        if(input === 1) {
          app.play();
        } else if(input === 2){
          MissionUtils.Console.close();
        } else {
          throw new Error('1과 2중에 값을 입력하세요.');
        }
      })
    }
  }

  play() {
    this.printStartMessage();
    let computer = this.randomThreeNumbers();
    let user = this.inputThreeNumbers();
    this.getResult(computer, user);
  }
}

module.exports = App;

