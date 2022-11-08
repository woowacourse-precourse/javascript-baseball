const constants = require("./data/constants.js");


function isVaild(value) {
  console.log(value);
  if(value.length === 0) throw new Error(constants.MESSAGE.IS_BLANK);
}

exports.isVaild = isVaild;