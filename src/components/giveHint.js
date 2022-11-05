const MissionUtils = require("@woowacourse/mission-utils");
const checkRandomNum = require("./checkRandomNum");
const pickThreeRandomNumForOneToNine = require("./pickThreeRandomNumForOneToNine");
const getHintDependingOnSituation = require("./getHintDependingOnSituation");

const giveHint = (randomNum = 0) => {
  if (!randomNum) {
    randomNum = pickThreeRandomNumForOneToNine();
  }
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (playerNum) => {
    try {
      conditionalPlayerNum = checkRandomNum(playerNum);
    } catch (error) {
      MissionUtils.Console.print(`[error] : ${error}. 게임이 종료됩니다.`);
      throw MissionUtils.Console.close();
    }
    getHintDependingOnSituation(randomNum, conditionalPlayerNum, giveHint);

    return giveHint(randomNum);
  });
};

module.exports = giveHint;
