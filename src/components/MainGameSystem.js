const MissionUtils = require("@woowacourse/mission-utils");
const ContextualHints = require("./ContextualHints");
const ThreeRandomNumForComputer = require("./ThreeRandomNumForComputer");

class MainGameSystem {
  constructor() {
    this.THREE_DIGITS = 3;
    this.NEEDLESS = 102;
    this.verifiedPlayerNum;
  }

  isDuplicate(randomNum) {
    return randomNum.split("").reduce((acc, num, index, arr) => {
      if (!acc.includes(num)) acc.push(num);
      if (index === 2) return acc.length !== arr.length;
      return acc;
    }, []);
  }

  checkPlayerRandomNum(randomNum) {
    if (randomNum.split("").length !== this.THREE_DIGITS) throw "3자리 아님";
    if (!Number(randomNum)) throw "숫자가아닌 값이 포함되어있습니다";
    if (Number(randomNum) < this.NEEDLESS)
      throw "-, +등 불필요한 값이 존재합니다.";
    if (this.isDuplicate(randomNum)) throw "중복되는 숫자가 존재합니다.";
    return randomNum;
  }

  getComputerRandomNum() {
    const pickThreeRandomNum = new ThreeRandomNumForComputer();
    return pickThreeRandomNum.returnNumsWithoutDuplication();
  }

  giveplayerHint(insideComputerNum) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (playerNum) => {
      try {
        this.verifiedPlayerNum = this.checkPlayerRandomNum(playerNum);
      } catch (error) {
        throw `[error] : ${error}. 게임이 종료됩니다.`;
      }

      const contextualHints = new ContextualHints(
        insideComputerNum,
        this.verifiedPlayerNum,
        MainGameSystem
      );
      contextualHints.getContextualHints();
      return this.giveplayerHint(insideComputerNum);
    });
  }

  runGame() {
    const computerNum = this.getComputerRandomNum();
    this.giveplayerHint(computerNum);
  }
}

module.exports = MainGameSystem;
