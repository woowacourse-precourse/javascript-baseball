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
    while (number.length < NUMBER_CONSTANTS.MAX_SCORE) {
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
    MissionUtils.Console.print(TOOL_CONSTANTS.DEFAULT_START);
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
    let strikeScore = this.strikeCount(computer, user);
    if (strikeScore === NUMBER_CONSTANTS.MAX_SCORE) {
      this.answerCheck = true ; 
      return TOOL_CONSTANTS.ANSWER;
    }
    if (ballScore === 0 && strikeScore === 0) {
      return TOOL_CONSTANTS.NOTHING;
    }
    if (strikeScore === 0) {
      return `${ballScore}${TOOL_CONSTANTS.BALL}`;
    }
    if (ballScore === 0) {
      return `${strikeScore}${TOOL_CONSTANTS.STRIKE}`;
    }
    return `${ballScore}${TOOL_CONSTANTS.BALL} ${strikeScore}${TOOL_CONSTANTS.STRIKE}`;
  }

  userInputError(userInput) {
    if (userInput.length !== NUMBER_CONSTANTS.MAX_SCORE) {
      this.answerCheck = true ; 
      throw ERROR_CONSTANTS.LENGTH;
    }
    if (new Set(userInput).size !== NUMBER_CONSTANTS.MAX_SCORE) {
      throw ERROR_CONSTANTS.OVERLAP;
    }
    if (userInput.includes('0')) {
      throw ERROR_CONSTANTS.SCOPE;
    }
    if (Number.isNaN(userInput) || userInput.includes(' ')) {
      throw ERROR_CONSTANTS.ISNAN;
    }
    return true;
  }
  userInputHandler(computer) {
    MissionUtils.Console.readLine(TOOL_CONSTANTS.GAME_START, (userInput) => {
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
    console.log(computer)
    this.userInputHandler(computer);
  }
  gameReset() {
    MissionUtils.Console.readLine(TOOL_CONSTANTS.GAMESET, (userInput) => {
      if (userInput === NUMBER_CONSTANTS.RE_START) {
        MissionUtils.Console.print(NUMBER_CONSTANTS.RE_START);
        this.answerCheck = false;
        return this.gameRepeat();
      }
      if (userInput === NUMBER_CONSTANTS.END) {
        MissionUtils.Console.print(NUMBER_CONSTANTS.END);
        return MissionUtils.Console.close();
      }
      throw ERROR_CONSTANTS.SET_INPUT;
    });
  }
}

const TOOL_CONSTANTS = {
  DEFAULT_START: '숫자 야구 게임을 시작합니다.',
  GAME_START: '숫자를 입력해주세요 : ',
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  ANSWER: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAMESET: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};
const ERROR_CONSTANTS = {
  LENGTH: '3자리의 수를 입력해야합니다.',
  OVERLAP: '중복된 수가 없는지 확인해야합니다.',
  SCOPE: '1~9까지의 숫자만 입력해야합니다',
  ISNAN: '숫자만 입력해야합니다.',
  SET_INPUT: '1과 2중 하나만 입력해야합니다.'
};
const NUMBER_CONSTANTS = {
  RE_START: '1',
  END: '2',
  MAX_SCORE: 3,
};