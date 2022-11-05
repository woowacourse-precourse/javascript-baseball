//@ts-check
const { GameState } = require("../model/BaseballGame");

const PROMPT = Object.freeze({
  ING: "숫자를 입력해주세요 : ",
  END: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 : "
})

class InputView {
  constructor(handler) {
    this._console = require("@woowacourse/mission-utils").Console;
    this._handler = handler;
  }
  render(state) {
    if (state === GameState.END) { 
      this._console.close();
      return;
    }
    const prompt = state === GameState.ING ? PROMPT.ING : PROMPT.END;
    this._console.readLine(prompt, (command) => {
      this._handler(command);
    });
  }
}


module.exports = InputView;