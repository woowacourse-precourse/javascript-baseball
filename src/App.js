const MissionUtils = require("@woowacourse/mission-utils");

function printMsg(message) {
  MissionUtils.Console.print(message);
}

function setAnswerNum() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
}

function askNumInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    isValidInput(number);
    printMsg(`입력하신 숫자는... ${number} 입니다.`);
  });
}

function isValidInput(number) {
  if (!isNumber(number) || !isVaildLength(number) || !isAllDiffNum(number)) {
    throw "유효한 값이 아니므로 게임을 종료합니다.";
  }
}

function isNumber(number) {
  const NUM_REG = /[1-9]/g;
  var remainedNotNum = number.replace(NUM_REG, "");
  if (remainedNotNum) return false;
  return true;
}

function isVaildLength(number) {
  if (number.length !== 3) return false;
  return true;
}

function isAllDiffNum(number) {
  const setNum = new Set(number.split(""));
  if (setNum.size !== 3) return false;
  return true;
}

class App {
  play() {
    printMsg("숫자 야구 게임을 시작합니다.");
    try {
      var answerNum = setAnswerNum();
      askNumInput();
    } catch (e) {
      printMsg(e);
    }
  }
}

module.exports = App;
