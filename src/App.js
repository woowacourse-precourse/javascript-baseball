const System = require("./System");
const User = require("./User");
class App {
  play() {
    const NumberBaseBallSystem = new System();
    const PlayingUser = new User();

    NumberBaseBallSystem.getStarted();
    NumberBaseBallSystem.createAnswerNumber();
    console.log(NumberBaseBallSystem.getNumber);
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
