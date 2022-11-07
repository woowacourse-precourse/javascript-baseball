const MissionUtils = require("@woowacourse/mission-utils");

const isContinue = async () => {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        resolve(answer);
      }
    );
  });
};

const checkProgress = async () => {
  let checkEnd = await isContinue();

  if (checkEnd === "1") {
    return true;
  } else {
    MissionUtils.Console.close();
  }
};

module.exports = checkProgress;
