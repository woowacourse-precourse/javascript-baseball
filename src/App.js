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
    
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      const userInput = input;
      const isUserInputValid = evaluateInput(userInput);
    });
  };
};

let app = new App();
app.play();

module.exports = App;
