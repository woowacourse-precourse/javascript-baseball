const { LENGTH } = require("./Constant.js");

class Judge {
  isPlayerInputValid(playerInput) {
    const numReg = /[\d]+/;
    if (playerInput.length !== LENGTH) return false;
    if (playerInput.match(numReg)[0].length !== LENGTH) return false;
    if (this.isDuplicateNum(playerInput)) return false;
    return true;
  }
}

module.exports = Judge;
