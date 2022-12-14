const { ERR_MSG } = require("./constants/constants");

const Validator = {
  validateCars(cars) {
    this.validateLength(cars);
    this.validateDuplicated(cars);
  },

  validateLength(cars) {
    cars.forEach((car) => {
      if (car.length > 5 || car.length < 1) throw ERR_MSG.LENGTH_ERR;
    });
  },

  validateDuplicated(cars) {
    const set = new Set(cars);
    if (set.size != cars.length) throw ERR_MSG.DUP_ERR;
  },

  validateTries(tries) {
    this.triesIsNaN(tries);
    this.triesOutOfRange(tries);
  },

  triesIsNaN(tries) {
    if (isNaN(tries)) throw ERR_MSG.TRIES_ERR;
  },

  triesOutOfRange(tries) {
    if (tries < 1) throw ERR_MSG.TRIES_ERR;
  },
};

module.exports = Validator;
