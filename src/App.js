const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.letComputerInput();
    this.letUserInput();
  }
  
  letComputerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
  
  letUserInput() {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      let errorCheck = new CheckInput(answer);
      if(!errorCheck.isValid(answer)) {
        throw new Error("올바르지 않은 입력값입니다.")
      }
      return answer;
    })
  }
}

class CheckInput {

  isValid(answer) {
    this.answer = answer;
    let isValid =
      this.isValidLength()
      && this.isNotduplicated()
      && this.isValidRange()
    return isValid;
  }

  isValidLength() {
    const LENGTH_LIMIT = 3;
    return (this.answer.length === LENGTH_LIMIT);
  }
  
  isNotduplicated() {
    const arr = [...new Set(this.answer)].join('');
    return this.answer === arr;
  }

  isValidRange() {
    const range = Array(9).fill().map((v, i) => (i+1).toString());
    return ([...new Set(this.answer)].every((num) => range.includes(num)));
  } 
  
}



module.exports = App;