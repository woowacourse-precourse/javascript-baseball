const getNewAnswer = require("./getNewAnswer");

class App {
  play() {
    const answer = getNewAnswer();
  }
}

const app = new App();
app.play();

module.exports = App;
