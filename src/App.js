const { showStartMessage } = require("./modules/showMessage");
const { makeRandomNumber ,getUsersPrediction } = require("./modules/playGameLoop");

class App {
  play() {
    showStartMessage();
    const randomNumber = makeRandomNumber();
    getUsersPrediction(randomNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
