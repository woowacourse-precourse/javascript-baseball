const MissionUtils = require("@woowacourse/mission-utils");
const gameEnd = require("./gameEnd");

const HowManyEqualNum = (conditionalPlayerNum, randomNum) => {
  const isSame = conditionalPlayerNum
    .split("")
    .map((num) => randomNum.includes(+num));
  return isSame.filter((value) => Boolean(value)).length;
};

const getHintDependingOnSituation = (
  randomNum,
  conditionalPlayerNum,
  giveHint
) => {
  const NO_STRIKE = 0;
  const ONE_STRIKE = 1;
  const TWO_STRIKE = 2;
  const THREE_STRIKE = 3;

  let NumWithSamePosition = conditionalPlayerNum
    .split("")
    .filter((num, i) => +num === +randomNum[i]).length;
  if (NumWithSamePosition === NO_STRIKE) {
    switch (HowManyEqualNum(conditionalPlayerNum, randomNum)) {
      case 0:
        MissionUtils.Console.print("낫싱");
        break;
      case 1:
        MissionUtils.Console.print("1볼");
        break;
      case 2:
        MissionUtils.Console.print("2볼");
        break;
      case 3:
        MissionUtils.Console.print("3볼");
        break;
    }
  }
  if (NumWithSamePosition === ONE_STRIKE) {
    switch (HowManyEqualNum(conditionalPlayerNum, randomNum) - 1) {
      case 0:
        MissionUtils.Console.print("1스트라이크");
        break;
      case 1:
        MissionUtils.Console.print("1볼 1스트라이크");
        break;
      case 2:
        MissionUtils.Console.print("2볼 1스트라이크");
        break;
    }
  }
  if (NumWithSamePosition === TWO_STRIKE) {
    MissionUtils.Console.print("2스트라이크");
  }
  if (NumWithSamePosition === THREE_STRIKE) {
    MissionUtils.Console.print("3스트라이크");
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    gameEnd(giveHint);
  }
};

module.exports = getHintDependingOnSituation;
