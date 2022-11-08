const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor () {

  }

  printStartMessage () {
    const str = "숫자 야구 게임을 시작합니다.";
    return str;
  }

  randomThreeNumbers() {
    let three_numbers = [];
    let array_size = 3;
    for(let i=0; i<array_size; i++) {
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      three_numbers.push(number);
    }
  }

  inputThreeNumbers() {

    let input = [];
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (line) => {
      input = line.split("").map(el => parseInt(el));
      checkInput(input);
    })
  }

  checkInput(input) {
    if(input.length !== 3) {
      throw new Error("세 자리 수를 입력하세요.");
    }
  }

  printResult() {

  }

  play() {

    MissionUtils.Console.print(this.printStartMessage());
    this.randomThreeNumbers();

    this.inputThreeNumbers();
    // this.calcResult(numbers);


  }
}

module.exports = App;

