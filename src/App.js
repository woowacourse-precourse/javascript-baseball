const { generateNumbers } = require("./modules/generateNumbers");
const { baseBall } = require("./modules/gameInformation");
const { gameStart } = require("./modules/gameStart")

class App {
  play() {
    gameStart();
    baseBall(generateNumbers());
  }
}

const app = new App();
app.play();

module.exports = App;
