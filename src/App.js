const giveHint = require("./components/giveHint");
const checkRandomNum = require("./components/firstAnnouncement");

class App {
  play() {
    checkRandomNum();
    giveHint();
  }
}

module.exports = App;
