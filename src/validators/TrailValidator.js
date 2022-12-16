const { VALIDATION_MESSAGE } = require('../constants');
const { CarGameError } = require('../errors');

class TrailValidator {
  static validateCarList(trailCnt) {
    const validations = {
      is_number: TrailValidator.#isTrailCntNumber,
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      TrailValidator.#validate(trailCnt, validateFunc, VALIDATION_MESSAGE.trailCnt[key]);
    });
  }

  static #validate(trailCnt, validateFunc, errorMessage) {
    if (!validateFunc(trailCnt)) {
      throw new CarGameError(errorMessage);
    }
  }

  static #isTrailCntNumber(trailCnt) {
    return !isNaN(trailCnt);
  }
}

module.exports = TrailValidator;
