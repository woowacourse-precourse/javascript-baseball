const InputView = require("./view/InputView");
const { GAME_STATE } = require("./model/BaseballGame");

class App {
  constructor() {
    this._inputView = new InputView((command) => {
      console.log(command);
      if (command === "win") this._next(GAME_STATE.WIN);
      else if (command === "end") this._next(GAME_STATE.END);
      else this._next(GAME_STATE.ING);
    });
  }
  _next(state) {
    this._inputView.render(state);
  }
  play() {
    this._next(GAME_STATE.ING);
  }
}

const a = new App();
a.play();

module.exports = App;
