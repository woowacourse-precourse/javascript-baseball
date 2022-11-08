class InvalidInputException extends Error {
  constructor(message = "잘못된 입력입니다.") {
    super(message);
    this.name = "InvalidInputException";
  }
}

module.exports = { InvalidInputException };
