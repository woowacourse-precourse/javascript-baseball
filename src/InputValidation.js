const InputValidation = {
    isNumber: function (input) {
        return !isNaN(Number(input));
    },
    isValidNum: function (input) {
        return input.length === 3 && input[0] !== "0";
    },
    isNotDuplicated: function (input) {
        return new Set(input).size === 3;
    },
};

module.exports = InputValidation;
