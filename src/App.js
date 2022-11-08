const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constants");
const makeRandomNumber = require("./utils/randomNumber");

class App {
  play() {
    //시작 메세지 출력하기!
    Console.print(MESSAGE.START);
    this.gameSetter();
  }
  //램덤 숫자(답) 미리 구하기!
  gameSetter() {
    const anwer = makeRandomNumber.createRandomNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
