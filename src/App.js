const { startGame, getRandomThreeNumber } = require("./libs");

class App {
  play() {
    const computerNumbers = getRandomThreeNumber();
    const inputConsole = startGame();
    inputConsole.on("line", (line) => {
      console.log(line);
      inputConsole.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
