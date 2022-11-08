class Exception {
  checkErrorFor(errorInstance) {
    errorInstance.occurError();
  }

  occurError() {
    throw new Error('OVERRIDING ERROR');
  }
}

module.exports = Exception;
