const GET_NUMBER = require("./CreateNumber");

class App {
  play() {
    const NUMBERS = GET_NUMBER();
  }
}

const app = new App();
app.play();

module.exports = App;