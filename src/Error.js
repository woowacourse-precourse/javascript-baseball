class InvalidInputException extends Error {
  constructor(message = "잘못된 입력입니다.") {
    super(message);
    this.message = message;
  }
}

class EmptyInputException extends InvalidInputException {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

class WhiteSpaceInputException extends InvalidInputException {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

class DuplicateElementException extends InvalidInputException {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

class InvalidDigitException extends InvalidInputException {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

class BadCommandException extends InvalidInputException {
  constructor(message) {
    super(message);
    this.message = message;
  }
}
