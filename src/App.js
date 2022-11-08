const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

const LENGTH_LIMIT = 3;

class App {
  play() {
    let newGame = new GameStart();
    newGame.start(true);
  }
}

const computerRandom = () => {
  const computer = [];
  while (computer.length < LENGTH_LIMIT) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

class GameStart {
  start(firstTime) {
    let computer = computerRandom();
    this.computer = this.handleComputer(computer);
    if(firstTime) {
      Console.print("숫자 야구 게임을 시작합니다.");
    }
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
      throw new Error("올바르지 않은 입력값입니다.");
    }
    if(!this.isThreeStrike(this.computer, answer)) {
      this.countStrikeAndBall(this.computer, answer);
    };
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

  endOrRestart(answer) {
    let RESTART = '1';
    let END = '2';
      if(answer === RESTART) {
        this.start(false);
      } 
      else if(answer === END) {
        Console.close()
      };
  }

  countStrikeAndBall(computer, user) {
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < LENGTH_LIMIT; i++) {
      const index = computer.indexOf(user[i]);
      if(index === i) {
        strike += 1;
      }
      else if(index > -1) {
        ball += 1;
      }
    }
    if(strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    }
    else if( strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
    }
    else if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    else {
      Console.print("낫싱");
    }
    this.user();
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