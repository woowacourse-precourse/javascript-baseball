const { VALIDATION_MESSAGE } = require('../constants');
const { CarGameError } = require('../errors');

const LIMIT = 5;

class CarListValidator {
  static validateCarList(carList) {
    const splittedCarNameList = carList.split(', ');

    const validations = {
      multiple: CarListValidator.#isCarMultiple,
      name_length: CarListValidator.#isLengthMoreThanLimit,
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      CarListValidator.#validate(splittedCarNameList, validateFunc, VALIDATION_MESSAGE.car[key]);
    });
  }

  static #validate(carList, validateFunc, errorMessage) {
    if (!validateFunc(carList)) {
      throw new CarGameError(errorMessage);
    }
  }

  static #isCarMultiple(carList) {
    return carList.length > 1;
  }

  static #isLengthMoreThanLimit(carList) {
    return !carList.some(car => car.length > LIMIT);
  }
}

module.exports = CarListValidator;
