//@ts-check
const Console = require("@woowacourse/mission-utils").Console;
const { isDuplicate, isInRange, isNumber } = require("../utils");

/** @abstract */
class InputView {
  /**
   * @abstract
   * @type {string}
   */
  prompt;

  /** @abstract */
  validate(command) {}
  render(resolve) {
    Console.readLine(this.prompt, (command) => {
      this.validate(command);
      resolve(command);
    });
  }
}

class TryMatchInputView extends InputView {
  prompt = "숫자를 입력해주세요 : ";
  validate(command) {
    if (!isNumber(command)) throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (!isInRange(0, 1000, +command))
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    if (isDuplicate(command))
      throw new Error("[ERROR] 중복되지 않은 숫자를 입력해주세요.");
    if (command.includes("0"))
      throw new Error("[ERROR] 0을 제외한 1-9의 숫자를 입력하세요.");
  }
}

class RetryInputView extends InputView {
  prompt = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
  validate(command) {
    if (command !== "1" && command !== "2")
      throw new Error("[ERROR] 1또는 2만 입력하세요.");
  }
}

module.exports = { InputView, TryMatchInputView, RetryInputView };
