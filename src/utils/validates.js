const MissionUtils = require('@woowacourse/mission-utils');
const {
    INPUT_MESSAGES,
    ERROR_MESSAGES,
    OUTPUT_MESSAGES,
} = require('./Constants');

class InputCheck {
    checkUserInputType(userInput) {
        for (let i = 0; i < 3; i++) {
            if (isNaN(Number(userInput[i]))) {
                throw new Error(ERROR_MESSAGES.TYPE_ERROR);
            }
        }
    };

    checkUserInputLength(userInput) {
        if (userInput.length !== 3) {
            throw new Error(ERROR_MESSAGES.LENGTH_ERROR);
        }
    };

    checkUserInputIsDiff(userInput) {
        let uniqueNumber = new Set(userInput);
        if (uniqueNumber.size !== userInput.length) {
            throw new Error(ERROR_MESSAGES.OVERLAP_ERROR);
        }
    };

    checkUserInputNumberRange(userInput) {
        for (let i = 0; i < 3; i++) {
            if (Number[userInput[i]] > 1 || Number[userInput[i]] < 9) {
                throw new Error(ERROR_MESSAGES.RANGE_ERROR);
            }
        }
    };
}

module.exports = InputCheck;