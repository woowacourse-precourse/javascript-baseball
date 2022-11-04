const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const test = require("./test");

class App {
  play() {
    let computerAnswer = [];
    function makeComputerAnswer() {
      computerAnswer = new Set();
      while (computerAnswer.size < 3) {
        computerAnswer.add(Random.pickNumberInRange(1, 9));
      }
      computerAnswer = Array.from(computerAnswer);
    }
    makeComputerAnswer();
    console.log(computerAnswer);
    Console.print("숫자 야구 게임을 시작합니다.");

    function isVaildData(input) {
      const vaildLength = input.length === 3;
      const vaildNumber = [...input].map((num) => {
        if (isNaN(num)) return false;
        return +num;
      });
      const isUniqueNumber = new Set(input.split("")).size === 3;

      if (!vaildLength || !vaildNumber || !isUniqueNumber) {
        throw new Error();
      }

      return vaildNumber;
    }
  }
}

[...a].map((num) => {
  if (isNaN(num)) return false;
  return +num;
});

// const a = new App();
// console.log(a.play());
Console.readLine("숫자를 입력해주세요 : ", (answer) => {
  console.log(answer);
});
module.exports = App;
