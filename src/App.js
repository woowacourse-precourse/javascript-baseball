const { gameStart } = require("./gameProcess.js");
class App {
  play() {
    gameStart()
  }
}

const app = new App;
app.play()

module.exports = App;
