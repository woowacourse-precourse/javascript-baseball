const MissionUtils = require("@woowacourse/mission-utils");

class App {
  static printGameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  static isNumber(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    const PREFIX_ZERO_REGEXP = /^[0]+[0-9]+$/;
    if (PREFIX_ZERO_REGEXP.test(str) || !NUMBER_REGEXP.test(str)) {
      return false;
    }
    return true;
  }

  static isThreeDigit(str) {
    if (!App.isNumber(str) || str.length !== 3) {
      return false;
    } 
    return true;
  }

  static isAllDifferent(str) {
    const setToCompare = new Set(str);
    if (str.length !== setToCompare.size) {
      return false;
    }
    return true;
  }

  static isCorrectInput(str) {
    if (App.isThreeDigit(str) && App.isAllDifferent(str)) {
      return true;
    }
    return false;
  }

  static getComputerNumber() {
    while (1) {
      let computerNum = String(MissionUtils.Random.pickNumberInRange(100, 999));
      if (App.isCorrectInput(computerNum)) {
        return computerNum;
      }
    }
  }
  
  static finishGame() {
    MissionUtils.Console.print('숫자 야구 게임을 종료합니다.');
    MissionUtils.Console.close();
  }

  static playGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      try {
      // 사용자가 잘못된 값을 입력한 경우 애플리케이션 종료
      if (!App.isCorrectInput(userInput)) throw new Error('Input is invalid')
      } catch(error) {
        MissionUtils.Console.print('입력값이 서로 다른 세 자릿수가 아닙니다.');
        App.finishGame();
      }
    });
  }

  play() {
    App.printGameStart();
    let computerNum = App.getComputerNumber();
    App.playGame();
  }
}

module.exports = App;
