const { print, readLine, pickUniqueNumbersInRange } = require("./Utils");

function createComputerNumbers() {
    return pickUniqueNumbersInRange(1, 9, 3);
}
const game = {
    gameStart() {
        const computerNumbers = createComputerNumbers();
        print(computerNumbers);
    },
}

module.exports = game;