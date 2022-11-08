const MainGameSystem = require("./components/MainGameSystem");
const firstAnnouncement = require("./components/firstAnnouncement");

class App {
  play() {
    firstAnnouncement();
    const mainGameSystem = new MainGameSystem();
    mainGameSystem.runGame();
  }
}

module.exports = App;
