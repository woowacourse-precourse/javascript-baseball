//@ts-check
const { GAME_STATE } = require("./enum");

class View {
	static #PROMPT_ING = "숫자를 입력해주세요 : ";
  static #PROMPT_END = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
	static #MESSAGE_START = "숫자 야구 게임을 시작합니다.";
	static #MESSAGE_END = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
	#console;
	#ingHandler;
	#endHandler;
	constructor(ingHandler, endHandler) {
    this.#console = require("@woowacourse/mission-utils").Console;
    this.#ingHandler = ingHandler;
		this.#endHandler = endHandler;
  }

	/** @param {GAME_STATE} state */
	input(state) {
		if (state === GAME_STATE.END) {
			this.#console.readLine(View.#PROMPT_END, this.#endHandler.bind(this))
			return;
		}
    this.#console.readLine(View.#PROMPT_ING, this.#ingHandler.bind(this))
  }// todo - 객체지향 다형성으로 Commendable통해 핸들러 하나만
	
	/** 
	 * @param {GAME_STATE} state
	 * @param {string} result
	 */
	output(state, result) { 
		switch (state) {
			case GAME_STATE.START:
				this.#console.print(View.#MESSAGE_START);
				break;
			case GAME_STATE.ING:
				this.#console.print(result);
				break;
			case GAME_STATE.END:
				this.#console.print(result);
				this.#console.print(View.#MESSAGE_END);
		}
	}// todo - 객체지향 다형성으로 switch없애야 함
}

module.exports = View;