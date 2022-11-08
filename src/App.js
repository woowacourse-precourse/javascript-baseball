const MissionUtils = require("@woowacourse/mission-utils");

const ERROR_MESSAGE = {
  notThreeLength: '3글자인 값을 입력해주세요!',
  notNumberRange: '1부터 9 사이의 값을 입력해주세요!',
  isDuplicated: '중복되지 않은 값을 입력하세요!',

  isInvalidRestartSubmit: '1과 2중에서 입력해주세요!',
};

const GAME_MESSAGE = {  
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  clear: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  askRestart: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요`,
}

const RESULT_COUNT = {
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
}

const RESTART_CODES = {
  restart: 1,
  end: 2,
}

const CLEAR_CONDITION = 3;

class GameUtils {
  static getRandomAnswer() {
    let answer = new Set();
    GameUtils.#addNumber(answer);
    answer = [...answer];
    return answer;
  }
  static #addNumber(numbers) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    numbers.add(randomNumber);
    if(numbers.size < CLEAR_CONDITION) GameUtils.#addNumber(numbers);
  }
  static toFilterdArray(input) {
    input = input.replace(/[\s,]/g, '');
    const arrayInput = input.split('').map(number => Number(number));
    return arrayInput;
  }
  static getResult(input, answer) {
    const result = {
      strike: 0,
      ball: 0,
    }
    input.forEach((inputNumber, idx) => {
      const answerNumber = answer[idx];
      if(GameUtils.#isStrike(inputNumber, answerNumber)) return result.strike += 1;
      if(GameUtils.#isBall(inputNumber, answer)) return result.ball += 1;
    });
    return result;
  }
  static #isStrike(inputNumber, answerNumber) {
    return inputNumber === answerNumber;
  }
  static #isBall(inputNumber, answer) {
    return answer.includes(inputNumber);
  }
}

class Validator {
  static isInvalidAnswer(value) {
    if(Validator.#isNotThreeLength(value)) return ERROR_MESSAGE.notThreeLength;
    if(Validator.#isOutOfRange(value)) return ERROR_MESSAGE.notNumberRange;
    if(Validator.#isDuplicated(value)) return ERROR_MESSAGE.isDuplicated;
    return false;
  }
  static #isNotThreeLength(value) {
    if(value.length !== CLEAR_CONDITION) return true;
    return false;
  }
  static #isOutOfRange(value) {
    value = value.join('');
    const regex = /^[1-9]*$/g;
    const result = regex.test(value);
    return !result;
  }
  static #isDuplicated(value) {
    const removeDuplicatedValue = [...new Set(value)];
    return (removeDuplicatedValue.length !== CLEAR_CONDITION);
  }
  static isInvalidRestartSubmit(value) {
    const validValues = Object.values(RESTART_CODES);
    if(!validValues.includes(value)) return ERROR_MESSAGE.isInvalidRestartSubmit;
    return false;
  }
}

class Print {
  static start() {
    MissionUtils.Console.print(GAME_MESSAGE.start);
  }  
  static result(score) {
    let resultMessage = '';
    if(score.ball) resultMessage += `${score.ball}${RESULT_COUNT.ball} `;
    if(score.strike) resultMessage += `${score.strike}${RESULT_COUNT.strike}`;
    if(resultMessage === '') resultMessage = RESULT_COUNT.nothing;
    resultMessage = resultMessage.trim();
    MissionUtils.Console.print(resultMessage);
  }
  static clear() {
    MissionUtils.Console.print(GAME_MESSAGE.clear);
  }
  static error(messege) {
    throw new Error(messege);
  }  
}

class App {
  play() {
    this.answer = GameUtils.getRandomAnswer();
    Print.start();
    this.#submitInput();
  }
  #submitInput() {
    MissionUtils.Console.readLine(GAME_MESSAGE.input, (input) => {
      console.log(input);
      input = GameUtils.toFilterdArray(input);
      const errorMessage = Validator.isInvalidAnswer(input);
      if(errorMessage) Print.error(errorMessage);
      const result = GameUtils.getResult(input, this.answer);
      Print.result(result);
      this.#isClear(result.strike);
    });
  }
  #isClear(score) {
    if(score !== CLEAR_CONDITION) return this.#submitInput();
    Print.clear();
    this.#clearGame();
  }
  #clearGame() {
    MissionUtils.Console.readLine(GAME_MESSAGE.askRestart, (submit) => {
      const errorMessage = Validator.isInvalidRestartSubmit(Number(submit));
      if(errorMessage) Print.error(errorMessage);
      this.#isRestart(Number(submit));
    });
  }
  #isRestart(submit) {
    submit = Number(submit);  
    if(submit === RESTART_CODES.restart) return this.play();
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;