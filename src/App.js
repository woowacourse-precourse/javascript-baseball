const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

function checkResult(computer, number) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    let index = computer.indexOf(number.charAt(i));
    if (index === -1) {
      continue;
    } else if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }

  if (strike === 3) {
    return true;
  }
  return false;
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
