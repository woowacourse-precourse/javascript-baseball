const { LENGTH } = require("./Constant.js");

class Judge {
  isPlayerInputValid(playerInput) {
    const numReg = /[\d]+/;
    if (playerInput.length !== LENGTH) return false;
    if (playerInput.match(numReg)[0].length !== LENGTH) return false;
    if (this.isDuplicateNum(playerInput)) return false;
    return true;
  }

  isDuplicateNum(playerInput) {
    const duplicateCountTable = [];

    for (let i = 0; i < 9; i++) {
      duplicateCountTable.push(0);
    }
    for (let i = 0; i < playerInput.length; i++) {
      duplicateCountTable[playerInput[i]]++;
    }

    for (let i = 0; i < 9; i++) {
      if (duplicateCountTable[i] > 1) return false;
    }
    return true;
  }
}

module.exports = Judge;
