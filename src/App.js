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

module.exports = App;
