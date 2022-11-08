const MESSAGE = require('./constants/message');

class Player {
  static checkValidValue(value) {
    const uniqueValue = [...new Set(value)].join('');

    if (value.length === 3 && /^[1-9]{3}$/.test(uniqueValue)) return value;
    else throw new Error(MESSAGE.ERROR.WRONG_VALUE);
  }
}

module.exports = Player;
