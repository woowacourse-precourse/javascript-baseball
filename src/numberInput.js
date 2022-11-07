const MissionUtils = require("@woowacourse/mission-utils");

const numberInput = () => {
  let inputNumber;
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (input) => {
    validate(input);
    inputNumber = input;
  });
  return inputNumber;
};

const validate = (num) => {
  const set = new Set(num.split(""));
  if (num.length > 3) {
    throw new Error("잘못된 값을 입력하셨습니다 - 3이상 숫자 입력");
  } else if (isNaN(Number(num))) {
    throw new Error("잘못된 값을 입력하셨습니다 - 숫자가 아닌 값을 입력");
  } else if (num.length !== [...set].length) {
    throw new Error("잘못된 값을 입력하셨습니다 - 중복되는 숫자 입력");
  }
};

module.exports = numberInput;
