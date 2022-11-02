const { startGame } = require("./libs");

class App {
  play() {
    const r1 = startGame();
    r1.on("line", (line) => {
      console.log(line);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
