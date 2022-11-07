const {
  randomNumberSetting,
  gameStartPhrase,
  gameProgressQuestion,
} = require("./gameFunctions");

class App {
  play() {
    const answer = randomNumberSetting();
    gameStartPhrase();
    gameProgressQuestion(answer);
  }
}

module.exports = App;
