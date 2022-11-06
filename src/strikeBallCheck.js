function strikeBallNumber(userNumber, computerNumber) {
    const strikeNumber = countStrike(userNumber, computerNumber);
    const ballNumber = countBall(userNumber, computerNumber);
    return { ballNumber, strikeNumber };
}

function countStrike(userNumber, computerNumber) {
    return userNumber.filter((eachDigit, index) => eachDigit === computerNumber[index]).length;
}

function countBall(userNumber, computerNumber) {
    const countIncludedNumber = userNumber.filter(eachDigit => computerNumber.includes(eachDigit)).length;
    return (countIncludedNumber - countStrike(userNumber, computerNumber));
}

module.exports = strikeBallNumber;