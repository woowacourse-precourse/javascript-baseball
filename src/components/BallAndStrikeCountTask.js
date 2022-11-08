const ballAndStrikeCountTask = (computerNumbers, userNumbers) => {
    const COMPUTER_NUMBERS_TO_STRING = computerNumbers.toString();
    const USER_NUMBERS_TO_STRING = userNumbers.toString();
    const COUNT_RESULT = {
        ball: 0,
        strike: 0,
    };
    for (let i = 0; i < 3; i++) {
        if (COMPUTER_NUMBERS_TO_STRING.indexOf(USER_NUMBERS_TO_STRING[i]) !== -1 && COMPUTER_NUMBERS_TO_STRING[i] === USER_NUMBERS_TO_STRING[i]) {
            COUNT_RESULT.strike += 1;
        } else if (COMPUTER_NUMBERS_TO_STRING.indexOf(USER_NUMBERS_TO_STRING[i]) !== -1) {
            COUNT_RESULT.ball += 1;
        }
    }
    return COUNT_RESULT;
};
module.exports = ballAndStrikeCountTask;
