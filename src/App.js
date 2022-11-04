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

const app = new App();
app.play();

module.exports = App;
