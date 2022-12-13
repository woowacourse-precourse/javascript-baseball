const outputView = require('./OutputView');
const Controller = require('./Controller');

class App {

  #controller = new Controller();

  play () {
    outputView.printStartGame();
    this.#controller.startGame();
  }

}

const app = new App();
app.play();

module.exports = App;
