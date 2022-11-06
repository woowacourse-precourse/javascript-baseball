const { baseballGameStart } = require('./gameStart');

class App {
  play() {
    baseballGameStart();
  }
}


const app = new App();
app.play();

module.exports = App;
