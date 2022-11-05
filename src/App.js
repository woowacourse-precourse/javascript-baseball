const giveHint = require("./components/giveHint");
const firstAnnouncement = require("./components/firstAnnouncement");

class App {
  play() {
    firstAnnouncement();
    giveHint();
  }
}

module.exports = App;
