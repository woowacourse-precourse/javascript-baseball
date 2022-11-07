const config = require('./config');

const validateGameInput = (input) => {
    const { RANGE_MIN, RANGE_MAX, NUM_LENGTH } = config.GAME_RANGE;
    const {
        INVALID_INPUT_LENGTH, INVALID_INPUT_RANGE, INVALID_INPUT_TYPE, DUPLICATE_INPUT, _
    } = config.GAME_INPUT_ERRORS;

    const isRightLength = input.length === NUM_LENGTH;
    const isNumberInput = !isNaN(input);

    const isInRange = (number) => number >= RANGE_MIN && number <= RANGE_MAX;
    const isAllInRange = [...input].map(Number).every(isInRange);

    const isDuplicate = (number) => input.indexOf(number) !== input.lastIndexOf(number);
    const duplicateExists = [...input].map(Number).some(isDuplicate);

    if (!isRightLength) throw new Error(INVALID_INPUT_LENGTH);
    if (!isNumberInput) throw new Error(INVALID_INPUT_TYPE);
    if (!isAllInRange) throw new Error(INVALID_INPUT_RANGE);
    if (duplicateExists) throw new Error(DUPLICATE_INPUT);
};


const validateRestartInput = (input) => {
    const { RESTART, END } = config.RESTART_INPUT;
    const { INVALID_RESTART_INPUT } = config.RESTART_INPUT_ERRORS;

    const isNumberInput = !isNaN(input);
    const isInRange = +input === RESTART || +input === END;

    if (!isNumberInput) throw new Error(INVALID_RESTART_INPUT);
    if (!isInRange) throw new Error(INVALID_RESTART_INPUT);
};

module.exports = { validateGameInput, validateRestartInput };