const MissionUtils = require("@woowacourse/mission-utils");
const showPrint = require("./showPrint");

const isContinue = (App) => {
  const innerApp = new App();
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (userNumber) => {
      if (userNumber == 1) {
        innerApp.play();
      }
      if (userNumber == 2) {
        showPrint("게임 종료");
        MissionUtils.Console.close();
      }
    }
  );
};

module.exports = isContinue;
