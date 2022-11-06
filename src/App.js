const { extractComputerNumber, baseballGameStart } = require('./input');

class App {
  play() {
    extractComputerNumber();
    baseballGameStart();
  }
}


const app = new App();
app.play();

module.exports = App;
