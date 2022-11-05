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
    printMsg(`입력하신 숫자는... ${input} 입니다.`);
  });
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
