const BaseBallGame = require("./BaseBallGame.js");

class App {
  constructor(){
    this.baseBallGame = new BaseBallGame();
  }
  play(){
    this.baseBallGame.start();
  }
}

const app = new App();
app.play()

module.exports = App;