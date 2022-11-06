const playing = require("./Play");

class App {
  play() {
    playing();
  }
}

const app = new App();
app.play();

module.exports = App;
