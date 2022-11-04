const System = require("./System");
class App {
  play() {
    System.prototype.getStarted();
  }
}

App.prototype.play();

module.exports = App;
