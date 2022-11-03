const Computer = require('./Computer');
const Interaction = require('./Interaction');

class App {
  play() {
    Interaction.printPlayMessage();
    const computer = new Computer();
    const interaction = new Interaction();
    // interaction.printResponseMessage();
  }

  start() {
    const computer = new Computer();
    const interaction = new Interaction();
  }
}

// module.exports = App;
const app = new App();
app.play();
