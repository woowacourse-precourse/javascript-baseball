const User = require('./UserData');
const gameStart = require('./GameStart');
class App {
  play() {
    const USER = new User();
    gameStart(USER);
  };
};
module.exports = App;