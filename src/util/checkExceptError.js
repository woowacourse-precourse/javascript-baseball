const {ANSWER_LENGTH} = require("../constant/constant");

const checkExceptError = (answers) => {
    if(answers.length !== ANSWER_LENGTH) return false;
    if(answers[0] === answers[1] || answers[1] === answers[2] || answers[0] === answers[2]) return false;
    if(isNaN(+answers)) return false;

    return true;
}

module.exports = checkExceptError;