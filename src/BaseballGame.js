const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');
const ComputerUser = require('./ComputerUser');

class BaseballGame {
  /**
   * 사용자가 입력한 값
   * @type {string}
   */
  #userInput;

  /**
   * 컴퓨터가 생성한 값
   * @type {[number, number, number]}
   */
  #computerInput;

  /**
   * 컴퓨터에게 랜덤한 숫자를 생성시킨 후, 사용자에게 숫자를 입력받기 시작한다.
   */
  start = () => {
    const computerUser = new ComputerUser();
    this.#computerInput = computerUser.createRandomAnswer();

    Console.print(Messages.START);
    this.getUserInput();
  };

  /**
   * 3자리이며 숫자만 입력되었는지 확인한다.
   */
  isInvalidThreeDigits = () => {
    const numberRegExp = new RegExp(/[0-9]/g);
    return this.#userInput.length !== 3 || !numberRegExp.test(this.#userInput);
  };

  /**
   * 사용자에게 숫자를 입력받는다.
   */
  getUserInput = () => {
    Console.readLine(Messages.INPUT_NUMBER, (number) => {
      this.#userInput = number;
      if (this.isInvalidThreeDigits()) {
        throw new Error(Messages.ERROR.NUMBER_RANGE);
      }

      const checkCount = this.getCheckCount();
      this.getCompareInput(checkCount);
    });
  };

  /**
   * 입력된 값을 한 자리씩 분리하고 컴퓨터가 생성한 값과 비교한다.
   * @returns {[number, number, number]} 컴퓨터와 사용자를 비교한 배열
   */
  getCheckCount = () => {
    const checkCount = [0, 0, 0];
    const splittedNumbers = this.#userInput.split('').map(Number);
    splittedNumbers.forEach((splittedNumber, index) => {
      if (this.#computerInput[index] === splittedNumber) checkCount[0]++;
      else if (this.#computerInput.includes(splittedNumber)) checkCount[1]++;
      else checkCount[2]++;
    });
    return checkCount;
  };

  /**
   * 사용자와 컴퓨터의 비교된 값을 통해 결과를 도출한다.
   * @param {[number, number, number]} checkCount - 컴퓨터와 비교한 값
   */
  getCompareInput = ([strike, ball, out]) => {
    let result = '';
    if (ball > 0) result += `${ball}볼 `;
    if (strike > 0) result += `${strike}스트라이크`;
    if (out === 3) result += `낫싱`;
    Console.print(result);

    if (strike === 3) this.chooseResetOrExit();
    else this.getUserInput();
  };

  /**
   * 스트라이크가 3번인 경우 결과를 확인하고 1(재시작), 2(종료)를 선택한다.
   */
  chooseResetOrExit = () => {
    Console.print(Messages.RESULT);
    Console.readLine(Messages.RESTART_OR_EXIT, (selectedNumber) => {
      if (selectedNumber === '1') {
        this.start();
      } else if (selectedNumber === '2') {
        Console.print(Messages.GAME_OVER);
        Console.close();
      } else {
        throw new Error(Messages.ERROR.CHOOSE_RANGE);
      }
    });
  };
}

module.exports = BaseballGame;
