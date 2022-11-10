const { Console } = require('@woowacourse/mission-utils');
const ContextualHints = require('./material/ContextualHints');
const ThreeRandomNumForComputer = require('./material/ThreeRandomNumFromComputer');

class MainGameSystem {
  constructor() {
    this.THREE_DIGITS = 3;
    this.NEEDLESS = 102;
    this.verifiedPlayerNum;
    this.RESTART = '1';
    this.GAVE_OVER = '2';
    this.computerNum = 0;
    this.APP_SHUT_DOWN = false;
  }

  isDuplicate(randomNum) {
    const LAST_INDEX = 2;
    return randomNum.split('').reduce((acc, num, index, arr) => {
      if (!acc.includes(num)) acc.push(num);
      if (index === LAST_INDEX) return acc.length !== arr.length;
      return acc;
    }, []);
  }

  checkPlayerRandomNum(randomNum) {
    if (randomNum.split('').length !== this.THREE_DIGITS) throw '3자리 아님';
    if (!Number(randomNum)) throw '숫자가아닌 값이 포함되어있습니다';
    if (Number(randomNum) < this.NEEDLESS) {
      throw '-, +등 불필요한 값이 존재합니다.';
    }
    if (this.isDuplicate(randomNum)) throw '중복되는 숫자가 존재합니다.';
    return randomNum;
  }

  getComputerRandomNum() {
    const pickThreeRandomNum = new ThreeRandomNumForComputer();
    return pickThreeRandomNum.returnNumsWithoutDuplication();
  }

  getPlayerNum() {
    Console.readLine('숫자를 입력해주세요 : ', (playerNum) => {
      try {
        this.verifiedPlayerNum = this.checkPlayerRandomNum(playerNum);
        return;
      } catch (error) {
        throw `[error] : ${error}. 게임이 종료됩니다.`;
      }
    });
  }

  givePlayerHint() {
    const contextualHints = new ContextualHints(
      this.computerNum,
      this.verifiedPlayerNum
    );
    let coco = contextualHints.getContextualHints();
    if (coco === 3) return this.endGameOrRestart();
  }

  endGameOrRestart() {
    this.computerNum = 0;
    Console.readLine(
      '3개의 숫자를 모두 맞히셨습니다. 게임 종료 \n' +
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        if (answer === this.RESTART) {
          return this.runGame();
        }
        if (answer === this.GAVE_OVER) {
          Console.print('게임 종료');
          this.APP_SHUT_DOWN = true;
          return Console.close();
        }
        if (answer !== this.RESTART && answer !== this.GAVE_OVER) {
          Console.print('올바르지 않은 값을 입력하여 게임이 종료됩니다.');
          throw Console.close();
        }
      }
    );
  }

  runGame() {
    if (this.APP_SHUT_DOWN) return;
    if (!this.computerNum) this.computerNum = this.getComputerRandomNum();
    this.getPlayerNum();
    this.givePlayerHint();
    return this.runGame();
  }
}

module.exports = MainGameSystem;
