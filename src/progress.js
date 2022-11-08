const computerAnswer = require("./makeComputerAnswer.js");
const createResult = require("./createResult.js");
const checkVaildData = require("./checkVaildData.js");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const progress = (computerAnswer) => {
  Console.readLine("숫자를 입력해 주세요 : ", (userAnswer) => {
    const GAME_RESULT = createResult(
      computerAnswer,
      checkVaildData(userAnswer)
    );
    if (!GAME_RESULT === true) return progress(computerAnswer);
    if (GAME_RESULT === true) {
      checkProgress(GAME_RESULT);
    }
  });
};

const checkProgress = (end) => {
  if (end) {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    isContinue();
  } else {
    progress();
  }
};

const isContinue = () => {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (answer) => {
      continueAnswer(answer);
    }
  );
};

const continueAnswer = (answer) => {
  switch (answer) {
    case "1":
      progress(computerAnswer());
      break;
    case "2":
      Console.close();
      break;
    default:
      Console.close();
      throw "잘못된 입력입니다. 프로그램을 종료합니다,";
  }
};

module.exports = progress;
