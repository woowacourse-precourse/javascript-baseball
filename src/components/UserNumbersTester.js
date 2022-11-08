const { ERROR_MESSAGE } = require("./Constants");
const userNumbersTester = (userNumbers) => {
    USER_NUMBERS_TO_STRING = userNumbers.toString();
    if (USER_NUMBERS_TO_STRING.length !== 3) {
        throw new Error(ERROR_MESSAGE.THREE_LENGTH);
    }
    if (isNaN(+userNumbers)) {
        throw new Error(ERROR_MESSAGE.NUMBER);
    }
    if (USER_NUMBERS_TO_STRING[0] === "0" || USER_NUMBERS_TO_STRING[1] === "0" || USER_NUMBERS_TO_STRING[2] === "0") {
        throw new Error(ERROR_MESSAGE.ZERO);
    }
    if (USER_NUMBERS_TO_STRING[0] === "-") {
        throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    }
    if (USER_NUMBERS_TO_STRING[0] === USER_NUMBERS_TO_STRING[1] || USER_NUMBERS_TO_STRING[1] === USER_NUMBERS_TO_STRING[2] || USER_NUMBERS_TO_STRING[2] === USER_NUMBERS_TO_STRING[0]) {
        throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
    return true;
};

module.exports = userNumbersTester;
