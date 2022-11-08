const MESSAGE = require('./constants/message');

class Player {
  static checkValidValue(value) {
    if (value.length !== 3) throw new Error(MESSAGE.ERROR.WRONG_VALUE);

    const uniqueValue = [...new Set(value)].join('');

    if (uniqueValue.length === 3 && /^[1-9]/.test(uniqueValue)) return value;
    else throw MESSAGE.ERROR.WRONG_VALUE;
  }
}

module.exports = Player;
