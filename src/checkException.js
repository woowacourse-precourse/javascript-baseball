const Message = require("./Message");

function checkInputLength(input) {
  return input.length !== 3;
}

function checkException(input) {
  if (checkInputLength(input)) {
    throw new Error(`${Message.error}`);
  }
}

module.exports = checkException;
