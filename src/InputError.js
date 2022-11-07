class InputError extends Error {
  constructor(message, cause = null) {
    super(message);
    this.cause = cause;
    this.name = this.constructor.name;
  }
}

module.exports = InputError;
