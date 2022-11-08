const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constants");
const makeRandomNumber = require("./utils/randomNumber");

class App {
  play() {
    //시작 메세지 출력하기!
    Console.print(MESSAGE.START);
  }
}
const app = new App();
app.play();
app.gameSetter();
module.exports = App;
