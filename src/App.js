const System = require("./System");
const User = require("./User");
const { Console } = require("./Utilitys");
class App {
  async play() {
    const NumberBaseBallSystem = new System();
    const PlayingUser = new User();

    NumberBaseBallSystem.getStarted();

    let replay = 1;
    let reGuess = true;
    do {
      NumberBaseBallSystem.createAnswerNumber();
      console.log(NumberBaseBallSystem.getNumber);
      do {
        const guessNumber = await PlayingUser.enterGuessNumber();
        const scoreboard = NumberBaseBallSystem.isStrike(guessNumber);
        NumberBaseBallSystem.notifyGuessResult(scoreboard);
        if (scoreboard.strike === 3) reGuess = false;
        else reGuess = true;
      } while (reGuess);
      replay = await PlayingUser.isReplay();
    } while (replay !== "2");
    Console.closeConsole();
  }
}

App.prototype.play();

// const readLine = (question) => {
//   return new Promise((resolve) => {
//     MissionUtils.Console.readLine(question, (answer) => {
//       resolve(answer);
//     });
//   });
// };

// const a = async () => {
//   const guessNumber = await readLine("숫자를 입력해주세요 : ");
//   console.log(guessNumber);
// };

// a();

module.exports = App;
