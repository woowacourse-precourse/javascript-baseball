const { baseballGameStart } = require('./gameStart');

class App {
  static play() {
    baseballGameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
