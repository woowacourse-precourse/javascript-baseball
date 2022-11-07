class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = ValidationError;
