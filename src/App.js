const outputView = require('./OutputView');
const Controller = require('./Controller');

class App {

  constructor () {
    this.controller = new Controller();
    }

  play () {
    outputView.printStartGame();
    this.controller.StartGame();
  }

}

const app = new App();
app.play();

module.exports = App;
