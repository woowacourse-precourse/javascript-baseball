const { LENGTH, RANGE } = require("./Constant.js");

class Judge {
  isPlayerInputValid(playerInput) {
    const numReg = /[1-9]+/;
    if (
      playerInput.length === LENGTH &&
      playerInput.match(numReg)[0].length === LENGTH &&
      !this.isDuplicateNum(playerInput)
    )
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
      if (duplicateCountTable[i] > 1) return true;
    }
    return false;
  }

  findStrikeAndBallCnt(computerRandomNum, playerInput) {
    let strikeCnt = 0;
    let ballCnt = 0;
    for (let i = 0; i < LENGTH; i++) {
      if (computerRandomNum[i] === playerInput[i]) strikeCnt++;
      else if (playerInput.indexOf(computerRandomNum[i]) !== -1) ballCnt++;
    }
    return { strikeCnt, ballCnt };
  }
}

module.exports = Judge;
