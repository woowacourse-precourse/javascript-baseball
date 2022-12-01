const BaseballGame = require('./Controller/BaseballGame');
const Computer = require('./Model/Computer');
const User = require('./Model/User');
const { generate } = require('./Utils/RandomNumberGenerator');

class App {
  constructor() {
    this.game = new BaseballGame(new Computer(generate), new User());
  }

  play() {
    this.game.run();
  }
}

const app = new App();
app.play();

module.exports = App;
