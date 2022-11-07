const computerAnswer = require("./makeComputerAnswer.js");
const vaildUserAnswer = require("./getUserAnswer.js");
const createResult = require("./createResult.js");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const progress = async () => {
  const ANSWER_NUMBER = computerAnswer();
  let isEnd = false;
  while (!isEnd) {
    const USER_ANSWER = await vaildUserAnswer();
    const GAME_RESULT = createResult(ANSWER_NUMBER, USER_ANSWER);
    if (GAME_RESULT === true) {
      checkProgress(GAME_RESULT);
      isEnd = true;
    }
  }

  return isEnd;
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
      progress();
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
