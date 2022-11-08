const MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  END_GAME: "게임 종료",
  END_PROGRAM: "프로그램을 종료합니다.",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const ERROR_MESSAGES = {
  DEFAULT: "올바르지 않은 입력입니다.",
  TYPE: "숫자만 입력할 수 있습니다.",
  DUPLICATE: "각 자리의 수는 중복되지 않아야 합니다.",
  EMPTY: "입력된 글자가 없습니다.",
  WHITE_SPACE: "입력에 공백이 있습니다.",
};

const RESULT = {
  NOTHING: "낫싱",
};

class Messages {
  constructor(digit = 3, minNumber = 1, maxNumber = 9) {
    this.digit = digit;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
  }

  static get start() {
    return MESSAGES.START;
  }

  static get endGame() {
    return MESSAGES.END_GAME;
  }

  get endProgram() {
    return END_PROGRAM;
  }

  static get restart() {
    return MESSAGES.RESTART;
  }

  get insertUserNumber() {
    return `${this.digit}자리 숫자(각 자리 수: ${this.minNumber}~${this.maxNumber})를 입력해주세요 : `;
  }

  get insertError() {
    return ERROR_MESSAGES.DEFAULT;
  }

  get emptyError() {
    return ERROR_MESSAGES.EMPTY;
  }

  get whiteSpaceError() {
    return ERROR_MESSAGES.WHITE_SPACE;
  }

  get rangeError() {
    return `각 자리의 수는 ${this.minNumber}부터 ${this.maxNumber}까지 입력할 수 있습니다.`;
  }

  get typeError() {
    return ERROR_MESSAGES.TYPE;
  }

  get digitError() {
    return `${this.digit}자리 수가 입력되어야 합니다.`;
  }

  get duplicateError() {
    return ERROR_MESSAGES.DUPLICATE;
  }

  get resultNothing() {
    return RESULT.NOTHING;
  }

  get resultCorrect() {
    return `${this.digit}개의 숫자를 모두 맞히셨습니다!`;
  }

  resultBall(count) {
    return (count && `${count}볼`) || "";
  }

  resultStrike(count) {
    return (count && `${num}스트라이크`) || "";
  }
}

module.exports = Messages;
