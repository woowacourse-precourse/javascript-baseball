//@ts-check
const { GAME_STATE } = require("./enum");

class View {
	static #PROMPT_ING = "숫자를 입력해주세요 : ";
  static #PROMPT_END = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
	static #MESSAGE_START = "숫자 야구 게임을 시작합니다.";
	static #MESSAGE_END = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
	constructor(ingHandler, endHandler) {
    this._console = require("@woowacourse/mission-utils").Console;
    this._ingHandler = ingHandler;
		this._endHandler = endHandler;
  }

	/** @param {GAME_STATE} state */
	input(state) {
		if (state === GAME_STATE.END) {
			this._console.readLine(View.#PROMPT_END, (command) => {
				this._endHandler(command);
			});
			return;
		}
    this._console.readLine(View.#PROMPT_ING, (command) => {
      this._ingHandler(command);
    });
  }// todo - 객체지향 다형성으로 Commendable통해 핸들러 하나만
	
	/** 
	 * @param {GAME_STATE} state
	 * @param {string} result
	 */
	output(state, result) { 
		switch (state) {
			case GAME_STATE.START:
				this._console.print(View.#MESSAGE_START);
				break;
			case GAME_STATE.ING:
				this._console.print(result);
				break;
			case GAME_STATE.END:
				this._console.print(result);
				this._console.print(View.#MESSAGE_END);
		}
	}// todo - 객체지향 다형성으로 switch없애야 함
}

module.exports = View;