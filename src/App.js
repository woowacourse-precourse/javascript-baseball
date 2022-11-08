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
  }

  inputThreeNumbers() {

    let input = [];
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (line) => {
      input = line.split("").map(el => parseInt(el));

      this.checkIsNumber(input);
      this.checkInputLength(input);
      this.checkInputDuplicate(input);
    })

    // return input;
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

  }

  endGame() {

  }

  play() {

    MissionUtils.Console.print(this.printStartMessage());
    this.randomThreeNumbers();
    this.inputThreeNumbers();
    
  }
}

module.exports = App;

