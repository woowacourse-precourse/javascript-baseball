const MissionUtils = require("@woowacourse/mission-utils");

const gameEnd = (giveHint) => {
  const RESTART = "1";
  const GAVE_OVER = "2";
  MissionUtils.Console.readLine(
    "게임을 새로 시작하면 1, 종료하려면 2를 입력하세요",
    (answer) => {
      console.log(answer);
      if (answer === RESTART) giveHint(0);
      if (answer === GAVE_OVER) {
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();
      }
    }
  );
};

module.exports = gameEnd;
