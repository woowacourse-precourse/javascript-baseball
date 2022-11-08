const {Console, Random} = require("@woowacourse/mission-utils");
const Messages = require("./Messages")

const START_GAME = 1;
const END_GAME = 2;

const replayGame = (selection) => {
    if (selection === START_GAME) return true;
    else if (selection === END_GAME) return false;
    else return Messages.ERROR.ERROR_VALUE;
};

const endGame = (strike) => {
    if (strike == 3) return true;
    else return false;
};

const selectComputer = () => {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
}



module.exports = Functions;