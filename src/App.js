const InputView = require("./view/InputView");
const { GameState } = require("./model/BaseballGame");

class App {
  constructor() {
    this._inputView = new InputView((command) => {
      console.log(command);
      this._next(GameState.ING);
    });
  }
  _next(isEnd) {
    this._inputView.render(isEnd);
  }
  play() {
    this._next(GameState.ING);
  }
}

module.exports = App;
