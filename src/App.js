const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/constants");
class App {
  play() {
    Console.print(MESSAGE.START);
    this.gamePrepare();
  }

  gamePrepare() {
    const answer = createRandomNumber();
  }


}
const app = new App();
app.play();
module.exports = App;
