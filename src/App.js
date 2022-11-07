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
    return computer;
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

class GiveScore {
  constructor(computer, user) {
    this.computer = computer;
    let computerInput = this.handleComputer(computer);
    this.user = user;
    if(!this.isThreeStrike(computerInput, user)) {
      this.countStrikeAndBall(computerInput, user);
    };
  }

  handleComputer(computer) {
    return (computer.join(''))
  }

  isThreeStrike(computer, user) {
    if(computer === user) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
      let RESTART = 1;
      let END = 2;
        if(answer === RESTART) {
          let playGame = new App();
          playGame.play();
        } else if(answer === END) {
          Console.close()
        };
      });
    }
    return false;
  }

}

module.exports = App;