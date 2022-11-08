const MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  END_GAME: "게임 종료",
  EXIT_APP: "프로그램을 종료합니다.",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const ERROR_MESSAGES = {
  DEFAULT: "올바르지 않은 입력입니다.",
  TYPE: "숫자만 입력할 수 있습니다.",
  DUPLICATE: "각 자리의 수는 중복되지 않아야 합니다.",
  EMPTY: "입력된 글자가 없습니다.",
  WHITE_SPACE: "입력에 공백이 있습니다.",
  COMMAND: "올바른 명령어가 입력되지 않았습니다.",
};

const RESULT_MESSAGES = {
  NOTHING: "낫싱",
};

class Messages {
  constructor(digit, minNumber, maxNumber) {
    this.digit = digit;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
  }

  get start() {
    return MESSAGES.START;
  }

  get endGame() {
    return MESSAGES.END_GAME;
  }

  get exitApp() {
    return MESSAGES.EXIT_APP;
  }

  get restart() {
    return MESSAGES.RESTART;
  }

  get inputQuestion() {
    return `${this.digit}자리 숫자(각 자리 수: ${this.minNumber}~${this.maxNumber})를 입력해주세요 : `;
  }

  get inputError() {
    return ERROR_MESSAGES.DEFAULT;
  }

  exitByInputError(message) {
    return `${this.inputError}\n${message}\n${this.exitApp}`;
  }

  get emptyError() {
    return this.exitByInputError(ERROR_MESSAGES.EMPTY);
  }

  get whiteSpaceError() {
    return this.exitByInputError(ERROR_MESSAGES.WHITE_SPACE);
  }

  get rangeError() {
    return this.exitByInputError(
      `각 자리의 수는 ${this.minNumber}부터 ${this.maxNumber}까지 입력할 수 있습니다.`
    );
  }

  get typeError() {
    return this.exitByInputError(ERROR_MESSAGES.TYPE);
  }

  get digitError() {
    return this.exitByInputError(`${this.digit}자리 수가 입력되어야 합니다.`);
  }

  get duplicateError() {
    return this.exitByInputError(ERROR_MESSAGES.DUPLICATE);
  }

  get commandError() {
    return this.exitByInputError(ERROR_MESSAGES.COMMAND);
  }

  get resultNothing() {
    return RESULT_MESSAGES.NOTHING;
  }

  get resultCorrect() {
    const strikes = this.resultStrike(this.digit);
    const correctMessage = `${this.digit}개의 숫자를 모두 맞히셨습니다!`;

    return `${strikes}\n${correctMessage} ${this.endGame}`;
  }

  resultBall(count) {
    return (count && `${count}볼`) || "";
  }

  resultStrike(count) {
    return (count && `${count}스트라이크`) || "";
  }
}

module.exports = Messages;
