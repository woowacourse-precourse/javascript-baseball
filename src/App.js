const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

function getComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
  }

  return computerNumber;
}

function getUserInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    MissionUtils.Console.close()
  })
}

getUserInput()

module.exports = App;
