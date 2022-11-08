const MESSAGES = {
  INVALID_INPUT: '올바르지 않은 입력입니다.',
  EXIT: '프로그램을 종료합니다.',
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
  constructor(message = '입력된 글자가 없습니다.') {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'EmptyInputException';
  }
}

class WhiteSpaceInputException extends InvalidInputException {
  constructor(message = '입력에 공백이 있습니다.') {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'WhiteSpaceInputException';
  }
}

class DuplicateElementException extends InvalidInputException {
  constructor(message = '각 자리의 수는 중복되지 않아야 합니다.') {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'DuplicateElementException';
  }
}

class InvalidDigitException extends InvalidInputException {
  constructor(message = '올바른 자리수의 숫자를 입력하셔야 합니다.') {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'InvalidDigitException';
  }
}

class BadCommandException extends InvalidInputException {
  constructor(message = '올바른 명령어가 입력되지 않았습니다.') {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'BadCommandException';
  }
}

class InputRangeException extends InvalidInputException {
  constructor(message = '각 자리 수의 범위가 올바르지 않습니다.') {
    super(message);
    this.message = getMessageExitByInputError(message);
    this.name = 'InputRangeException';
  }
}

class InputTypeException extends InvalidInputException {
  constructor(message = '숫자만 입력할 수 있습니다.') {
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
  BadCommandException,
  InputRangeException,
  InputTypeException,
};
