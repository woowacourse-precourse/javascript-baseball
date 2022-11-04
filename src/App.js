const getAnswer = require("./createAnswer");

class App {
  play() {
    const answer = getAnswer();
  }
}

const app = new App();
app.play();

module.exports = App;
