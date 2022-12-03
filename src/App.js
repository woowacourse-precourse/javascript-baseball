//@ts-check
const BaseballGame = require("./controller/BaseballGame");
const { RetryInputView } = require("./view/InputView");

class App {
  *play() {
    // const baseballGame = new BaseballGame();
    const retryInputView = new RetryInputView();
    yield 1;
    console.log("1초 기다림");
    yield 2;
  }
}
const a = new App();
const dd = a.play();
console.log(dd.next());
console.log(dd.next());
module.exports = App;
