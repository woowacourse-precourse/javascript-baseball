const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNumber = makeComputerNumber();
    console.log("숫자 야구 게임을 시작합니다.");

    for (let playCount = 0; playCount < 3; playCount++) {
      const userInput = getUserInput();
    }
  }
}

const makeComputerNumber = () => {
  const computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return computerNumber;
};

const getUserInput = () => {
  let inputArray = [];

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
    if (isNaN(inputNumber) || inputNumber.length !== 3) {
      throw new Error(
        "Input values should be given in three natural numbers under 10."
      );
    }

    inputArray = inputNumber.split("");
    const set = new Set(inputArray);

    if (inputArray.length !== set.size) {
      throw new Error("Duplication is not allowed.");
    }
  });
  return inputArray;
};

module.exports = App;
