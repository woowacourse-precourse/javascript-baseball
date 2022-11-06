const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {

    function ComputerPicksNumber() {
      let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999);
      let [a, b, c] = targetNumber.toString().split("");
      do {
        let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999);
        [a, b, c] = targetNumber.toString().split("");
      } while (a === b || b === c || a === c)
      targetNumber = a + b + c;
      return targetNumber;
    };

    function sayStart() {
      MissionUtils.Console.print('숫자 야구  시작합니다.');
    };

    sayStart();

    let computerInput = ComputerPicksNumber();

    function evaluateInput(input) {
      let inputString = input.toString();
      let inputLength = inputString.length;
      let [a, b, c] = inputString.split("");
      let isNumber = isNaN(input);
      if (isNumber === true) {
        return false;
      }else if (inputLength !== 3) {
        return false;
      } else if (a === b || b === c || a === c) {
        return false;
      } else {
        return true;
      }
    };

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      const userInput = input;
      MissionUtils.Console.print(evaluateInput(userInput));
    });
  };
};

let app = new App();
app.play();

module.exports = App;
