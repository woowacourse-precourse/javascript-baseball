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

  static calculateScore(computerNum, userInput) {
    const computerNumArr = [...computerNum];
    const userInputArr = [...userInput];
    let score = { ball: 0, strike: 0, };

    for (let idx = 0; idx < userInputArr.length; idx++) {
      if (computerNumArr[idx] === userInputArr[idx]){
        score.strike = score.strike + 1;
        continue;
      }
      if (computerNumArr.includes(userInputArr[idx])) {
        score.ball = score.ball + 1;
      }
    }
    return score;
  }

  static isZeroScore(score) {
    if ((score.ball === 0) && (score.strike === 0)) {
      return true;
    }
    return false;
  }

  static isThreeStrike(score) {
    if (score.strike === 3) return true;
    return false;
  }

  static playGame(computerNum) {
    let score;
    const RESTART = '1';

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      try {
        // 사용자가 잘못된 값을 입력한 경우 애플리케이션 종료
        if (!App.isCorrectInput(userInput)) throw new Error('Input is invalid')
        
        score = App.calculateScore(computerNum, userInput);

        if (App.isThreeStrike(score)) {
          MissionUtils.Console.readLine('3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
            (selectInput) => {
              if (selectInput === RESTART) {
                App.restartGame();
                return;
              }
              App.finishGame();
            });
        }

        if (!App.isThreeStrike(score)) {
          const ZERO_SCORE_MESSAGE = '낫싱';
          const SCORE_MESSAGE = `${score.ball}볼 ${score.strike}스트라이크`;
          let resultMessage = App.isZeroScore(score) ? ZERO_SCORE_MESSAGE : SCORE_MESSAGE ;
          MissionUtils.Console.print(resultMessage);
          App.playGame(computerNum);
          return;
        }
      
      } catch(error) {
        MissionUtils.Console.print('입력값이 서로 다른 세 자릿수가 아닙니다.');
        App.finishGame();
      }
    });
  }

  static restartGame() {
    const computerNum = App.getComputerNumber();
    App.playGame(computerNum);
    return;
  }

  play() {
    App.printGameStart();
    const computerNum = App.getComputerNumber();
    App.playGame(computerNum);
  }
}

module.exports = App;
