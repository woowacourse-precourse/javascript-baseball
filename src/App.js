const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const baseballGame = new BaseballPlayTool();
    baseballGame.startText();
    baseballGame.gameRepeat();
  }
}

module.exports = App;


class ComputerRandomNumber {
  randomNumber() {
    const number = [];
    while (number.length < 3) {
      const numberInput = MissionUtils.Random.pickNumberInRange(1,9);
      if (!number.includes(numberInput)) {
        number.push(numberInput);
      }
    }
    return number;
  }
}

class BaseballPlayTool {
 constructor() {
   this.answerCheck = false;
  }

 startText() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  ballCount(computer, user) {
    let count = 0;
    computer.forEach((number,index) => {
      if (user.includes(number) && number !== Number(user[index])) {
        count += 1;
      }
    },0)
    return count;
  }
  strikeCount(computer, user) {
    let count = 0;
    computer.forEach((number,index) => {
      if (user.includes(number) && number === Number(user[index])) {
        count += 1;
      }
    },0)
    return count;
  }
  gameRule(computer, user) {
    let ballScore = this.ballCount(computer, user);
    let strikeScorer = this.strikeCount(computer, user);
    if (strikeScorer === 3) {
      this.answerCheck = true ; 
      return "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    }
    if (ballScore === 0 && strikeScorer === 0) {
      return "낫싱";
    }
    if (strikeScorer === 0) {
      return `${ballScore}볼`;
    }
    if (ballScore === 0) {
      return `${strikeScorer}스트라이크`;
    }
    return `${ballScore}볼 ${strikeScorer}스트라이크`;
  }

  userInputError(userInput) {
    if (userInput.length !== 3) {
      this.answerCheck = true ; 
      throw ('3자리의 수를 입력하세요.');
    }
    if (new Set(userInput).size !== 3) {
      throw ('중복된 수가 없는지 확인해주세요.');
    }
    if (userInput.includes('0')) {
      throw ('1~9까지의 숫자만 입력해주세요.');
    }
    if (Number.isNaN(userInput) || userInput.includes(' ')) {
      throw ('숫자만 입력해주세요.');
    }
    return true;
  }
  userInputHandler(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userInput) => {
      this.userInputError(userInput);
      MissionUtils.Console.print(this.gameRule(computer, userInput));
      if (!this.answerCheck) {
        return this.userInputHandler(computer);
      }

      if (this.answerCheck) {
        return this.gameReset();
      }
    });
  }

  gameRepeat() {
    const computerInput = new ComputerRandomNumber();
    const computer = computerInput.randomNumber();
    this.userInputHandler(computer);
  }
  gameReset() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
      if (userInput === '1') {
        this.answerCheck = false;
        return this.gameRepeat();
      }
      if (userInput === '2') {
        return MissionUtils.Console.close();
      }
    });
  }
}
