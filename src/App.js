const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

function checkException(number) {
  if (number === undefined) {
    throw new Error("undefined");
  } else if (number === "") {
    throw new Error("입력해야 합니다.");
  } else if (isNaN(number)) {
    throw new Error("숫자를 입력해야 합니다.");
  } else if (number.length !== 3) {
    throw new Error("세자리 숫자를 입력해야 합니다.");
  } else if (checkSameNumber(number)) {
    throw new Error("서로 다른 숫자를 입력해야 합니다.");
  }
}

function checkSameNumber(number) {
  for (let i = 1; i < number.length; i++) {
    if (number.indexOf(number.charAt(i)) != i) {
      return true;
    }
  }
  return false;
}

function getRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
}

module.exports = App;
