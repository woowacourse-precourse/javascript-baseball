const Controller = require('../src/Controller/Controller');
class App {
  constructor() {
    this.controller = new Controller();
  }
  
  play() {
    this.controller.Hello();
  }
}

const app = new App();
app.play()

module.exports = App;
