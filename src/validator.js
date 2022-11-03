const constants = require("./data/constants.js");

function isNotThreeLength(value) {
  if(value.length !== 3) return true;
  return false;
}


function isVaild(value) {
  console.log(value);
  if(value.length === 0) throw new Error(constants.MESSAGE.IS_BLANK);
  if(isNotThreeLength(value)) throw new Error(constants.MESSAGE.NOT_THREE_LENGTH);
}

exports.isVaild = isVaild;