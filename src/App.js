const MissionUtils = require("@woowacourse/mission-utils");

function printMsg(message) {
  MissionUtils.Console.print(message);
}

function setAnswer() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
}

function askNumInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    isValidInput(input);
  });
}

function isBallOrStrike(answer, input) {
  var ballCount = 0;
  var strikeCount = 0;

  var answerSet = new Set(answer);
  for (var idx in input) {
    if (answer[idx] === input[idx]) {
      strikeCount += 1;
      continue;
    }
    if (answerSet.has(input[idx])) ballCount += 1;
  }
  return { ballCount, strikeCount };
}

function askRematchOrExit() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (input) => {
      switch (input) {
        case "1":
          printMsg("재경기를 진행합니다.");
          askNumInput();
          break;
        case "2":
          printMsg("게임을 종료합니다.");
          MissionUtils.Console.close();
          break;
        default:
          printMsg("1 또는 2를 입력하지 않았습니다.");
          askRematchOrExit();
      }
    }
  );
}

function isValidInput(input) {
  if (!isNumber(input) || !isVaildLength(input) || !isAllDiffNum(input)) {
    throw new Error("유효한 값이 아니므로 게임을 종료합니다.");
  }
}

function isNumber(input) {
  const NUM_REG = /[1-9]/g;
  var remainNotNum = input.replace(NUM_REG, "");
  if (remainNotNum) return false;
  return true;
}

function isVaildLength(input) {
  if (input.length !== 3) return false;
  return true;
}

function isAllDiffNum(input) {
  const setInput = new Set(input.split(""));
  if (setInput.size !== 3) return false;
  return true;
}

class App {
  play() {
    printMsg("숫자 야구 게임을 시작합니다.");
    const ANSWER = setAnswer();
    askNumInput();
  }
}

module.exports = App;
