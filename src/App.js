class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    const MAKEANSWER = function makeAnswerWithThreeUniqueNumbers() {
      const THREE_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
      const ANSWER = THREE_NUMBERS[0] * 100 + THREE_NUMBERS[1] * 10 + THREE_NUMBERS[2] * 1;
      return ANSWER;
    }

    const CHECK_INPUT_DURING_GAME = function checkInputDuringGame(userInput) {
      if (userInput.length !== 3) return false;
      if (isNaN(userInput)) return false;
      if (userInput[0] === userInput[1] 
        || userInput[1] === userInput[2] 
        || userInput[0] === userInput[2]) return false;
      if (!(userInput.match(/[123456789]{3}/))) return false;
      return true;
    }

    const CHECK_INPUT_AFTER_GAME = function checkInputAfterGame(userInput) {
      if (+userInput === 1 || +userInput === 2) return true;
      return false;
    }


    MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
      console.log(CHECK_INPUT_AFTER_GAME(answer));
    });

  }
}
const app = new App();
app.play();
module.exports = App;
