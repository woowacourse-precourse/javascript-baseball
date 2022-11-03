const { game } = require("./libs");
const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    let isOver = false;
    while (!isOver) {
      for await (const { status, num } of game()) {
        if (status === "pitch" && num.length !== 3) {
          throw new Error();
        }
        if (status === "restart" && !(num === "1" || num === "2")) {
          throw new Error();
        }
        if (status === "restart" && num === "2") {
          isOver = true;
        }
      }
    }
    Console.close();
  }
}
const app = new App();
app.play();

module.exports = App;
