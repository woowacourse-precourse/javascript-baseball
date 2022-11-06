const Opponent = require("./Opponent");

class App {
  play() {
    const com = new Opponent();
    com.setAnswerWith3RandomNumbers();
    console.log(com.getAnswerString());
  }
}

module.exports = App;

const app = new App();
app.play();