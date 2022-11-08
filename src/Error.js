const MESSAGES = {
  INVALID_INPUT: '올바르지 않은 입력입니다.',
  EXIT: '프로그램을 종료합니다.',
  EMPTY: '입력된 글자가 없습니다.',
  WHITESPACE: '입력에 공백이 있습니다.',
  DUPLICATE: '각 자리의 수는 중복되지 않아야 합니다.',
  DIGIT: '올바른 자리수의 숫자를 입력하셔야 합니다.',
  COMMAND: '올바른 명령어가 입력되지 않았습니다.',
  RANGE: '각 자리 수의 범위가 올바르지 않습니다.',
  TYPE: '숫자만 입력할 수 있습니다.',
};

function getMessageExitByInputError(message) {
  return `${MESSAGES.INVALID_INPUT}\n${message}\n${MESSAGES.EXIT}`;
}

class InvalidInputException extends Error {
  constructor(message = MESSAGES.INVALID_INPUT) {
    super(message);
    this.name = 'InvalidInputException';
  }
}

class EmptyInputException extends InvalidInputException {
  constructor(message = MESSAGES.EMPTY) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'EmptyInputException';
  }
}

class WhiteSpaceInputException extends InvalidInputException {
  constructor(message = MESSAGES.WHITESPACE) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'WhiteSpaceInputException';
  }
}

class DuplicateElementException extends InvalidInputException {
  constructor(message = MESSAGES.DUPLICATE) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'DuplicateElementException';
  }
}

class InvalidDigitException extends RangeError {
  constructor(message = MESSAGES.DIGIT) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'InvalidDigitException';
  }
}

class InvalidCommandException extends RangeError {
  constructor(message = MESSAGES.COMMAND) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'InvalidCommandException';
  }
}

class InputRangeException extends RangeError {
  constructor(message = MESSAGES.RANGE) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'InputRangeException';
  }
}

class InputTypeException extends TypeError {
  constructor(message = MESSAGES.TYPE) {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'InputTypeException';
  }
}

module.exports = {
  EmptyInputException,
  WhiteSpaceInputException,
  DuplicateElementException,
  InvalidDigitException,
  InvalidCommandException,
  InputRangeException,
  InputTypeException,
};
