const MissionUtils = require("@woowacourse/mission-utils");
const { ANSWER, RESULT, TEXT, GAME_END, ERROR } = require("./constant");

class App {
  constructor() {
    this.initialPrint();
  }

  initialPrint() {
    MissionUtils.Console.print(TEXT.INITIAL);
  }

  play() {
    this.computerNumber = this.makeRandomNumber();
    this.getUserNumber();
  }

  makeRandomNumber() {
    const resultNumber = [];
    while (resultNumber.length < ANSWER.LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(ANSWER.MIN, ANSWER.MAX);
      if (!resultNumber.includes(number)) {
        resultNumber.push(number);
      }
    }
    return resultNumber;
  }

  getUserNumber() {
    MissionUtils.Console.readLine(TEXT.GET_USER_NUMBER, (input) => {
      if (!this.isValidUserNumber(input)) {
        throw new Error(ERROR.INVALID_USER_NUMBER);
      }
      this.handleGameProcess(this.stringToNumberArray(input));
    });
  }

  isValidUserNumber(input) {
    if (input.length !== ANSWER.LENGTH) return false;
    if (new Set(input).size !== ANSWER.LENGTH) return false;
    if (input.includes(0)) return false;
    if (Number.isNaN(Number(input))) return false;
    return true;
  }

  stringToNumberArray(string) {
    return [...string].map(char => Number(char));
  }

  handleGameProcess(userNumber) {
    const result = this.compareNumber(this.computerNumber, userNumber);
    this.printResult(result);
    if (this.isCorrectAnswer(result)) {
      this.askRetry();
      return;
    }
    this.getUserNumber();
  }
  
  compareNumber(computerNumber, userNumber) {
    const result = {
      ball: 0,
      strike: 0,
    };
    
    userNumber.forEach((num, index) => {
      if (num === computerNumber[index]) result.strike += 1;
      else if (computerNumber.includes(num)) result.ball += 1;
    });
    return result;
  }
  
  printResult(result) {
    const {strike, ball} = result;
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print(RESULT.NOTHING);
      return;
    } 
    
    const resultText = [];
    if (ball > 0) resultText.push(ball + RESULT.BALL);
    if (strike > 0)  resultText.push(strike + RESULT.STRIKE);
    MissionUtils.Console.print(resultText.join(' '));
  }

  isCorrectAnswer(result) {
    if (result.strike === ANSWER.LENGTH){
      MissionUtils.Console.print(TEXT.CORRECT_ANSWER);
      return true;
    }
    return false;
  }

  askRetry() {
    MissionUtils.Console.readLine(TEXT.RETRY, (answer) => {
      this.retryOrExit(answer);
    });
  }

  retryOrExit(answer) {
    if (answer === GAME_END.RETRY) {
      this.play();
      return;
    }
    if (answer === GAME_END.EXIT) {
      MissionUtils.Console.close(); 
      return;
    }
    MissionUtils.Console.print(ERROR.INVALID_RETRY);
    this.askRetry();
  }
}

module.exports = App;
