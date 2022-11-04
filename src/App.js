const { game, statusValidation } = require("./libs");
const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    let isOver = false;
    while (!isOver) {
      for await (const { status, num } of game()) {
        isOver = !statusValidation({ status, num });
      }
    }
    Console.close();
  }
}
const app = new App();
app.play();

module.exports = App;
