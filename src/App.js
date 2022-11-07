// run `node index.js` in the terminal
//@woowacourse/mission-utils

const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START = 1;
const GAME_END = 2;
const ERROR = -1;

class App {
  #gameState;
  #computerAnswer = [];
  #userInput;

  constructor() {
    this.#gameState = GAME_START;
  }

  play() {
    this.#computerAnswer = this.#gameStart();
    console.log(this.#computerAnswer);

    this.#inputFromUser();

    //MissionUtils.Console.close();
  }

  //private 처리
  #gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  #inputFromUser() {
    //출력 중간에 입력값이 보이는 에러가 있어 개행문자를 추가했습니다.
    //ex) 숫자를 입력해345요
    let input = 0;

    MissionUtils.Console.readLine('숫자를 입력해주세요 : \n', (answer) => {
      input = answer;
      console.log(input);

      //예외 발생 시 다시 입력 처리
      if (this.#inputExcept(input) === ERROR) {
        return this.#inputFromUser();
      }

      this.#userInput = this.#inputToArray(input)

      

      MissionUtils.Console.close();
    });

    return;
  }

  #

  #inputToArray(input) {
    return input.split('');
  }

  #inputExcept(input = '') {
    if (input == '') {
      MissionUtils.Console.print('입력값이 없습니다.');
      return ERROR;
    }

    let numReg = /[0-9]/g;
    if (input.match(numReg) == null) {
      MissionUtils.Console.print('숫자가 아닙니다. ');
      return ERROR;
    }

    if (input.length != 3) {
      MissionUtils.Console.print('세자리 숫자가 아닙니다. ');
      return ERROR;
    }
    return 0;
  }
}


module.exports = App;
