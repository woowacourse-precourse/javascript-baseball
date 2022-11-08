const { Console } = require("@woowacourse/mission-utils");

function exception(userSet) {
  if (userSet.length !== 3) {
    Console.close();
    throw "숫자의 길이가 올바르지 않습니다.";
  }
  if (
    userSet[0] === userSet[1] ||
    userSet[0] === userSet[2] ||
    userSet[1] === userSet[2]
  ) {
    Console.close();
    throw "입력에 중복된 숫자가 존재합니다.";
  }
  if (isNaN(userSet)) {
    Console.close();
    throw "입력이 숫자가 아닙니다.";
  }
  if (userSet.includes(0)) {
    Console.close();
    throw "입력 중에 1 이상 9 이하가 아닌 숫자가 존재합니다.";
  }
}

function pickedWrongChoice() {
  Console.close();
  throw "입력된 값이 유효하지 않습니다.";
}

module.exports = {
  exception,
  pickedWrongChoice,
};
