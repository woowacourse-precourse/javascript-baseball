const MissionUtils = require("@woowacourse/mission-utils");

const termintateGame = (reason) => {
  const TERMINATE_REASON = {
    USER_TERMINATE: "게임을 종료합니다.",
    WRONG_INPUT: "잘못된 값을 입력하셨습니다! 게임을 종료합니다.",
  };

  MissionUtils.Console.print(TERMINATE_REASON[reason]);

  return MissionUtils.Console.close();
};

module.exports = termintateGame;
