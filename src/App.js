const MainGameSystem = require("./components/MainGameSystem");
const firstAnnouncement = require("./components/firstAnnouncement");

class App {
  play() {
    firstAnnouncement();
    const mainGameSystem = new MainGameSystem();
    mainGameSystem.returnHint();
  }
}

module.exports = App;
