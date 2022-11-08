const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {

  }
}

const computerRandom = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

class gameStart {
  start() {
    let computer = computerRandom();
    this.computer = this.handleComputer(computer);
    Console.print("숫자 야구 게임을 시작합니다.");
    this.user();
  }

  user() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      let newCountScore = this.countScore(answer);
      newCountScore;
    })
  }
  
  handleComputer(computer) {
    return (computer.join(''))
  }

  countScore(answer) {
    let errorCheck = new InputCheck(answer);
    if(!errorCheck.isValid(answer)) {
      throw new Error("올바르지 않은 입력값입니다.")
    }
  }

  isThreeStrike(computer, user) {
    if(computer === user) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
        let notice = this.endOrRestart(answer);
        notice;
      });
      return true;
    }
    return false;
  }

}

class InputCheck {

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