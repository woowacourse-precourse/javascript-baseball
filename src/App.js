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

    //확인용 (지우기)
    MissionUtils.Console.print(three_numbers);


    // return three_numbers;
  }

  inputThreeNumbers() {
    
  }

  play() {

    MissionUtils.Console.print(this.printStartMessage());
    this.randomThreeNumbers();





  }
}

module.exports = App;

