class InValidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InValidInputError';
  }
}

module.exports = InValidInputError;