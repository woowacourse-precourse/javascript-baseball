const GET_ANSWER = require("./")

class App {
  play() { }
}

module.exports = App;

const getAnswer = require("./createAnswer");

class App {
  play() { }
  play() {
    const answer = getAnswer();
  }
}

const app = new App();
app.play();
