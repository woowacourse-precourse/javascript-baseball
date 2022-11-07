const MissionUtils = require("@woowacourse/mission-utils");


const generateRandomBallNumber = () => {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer.join('');
}

const countBallStrike = (computerNumbersArray, userNumbersArray) => {
    const count = {
        ball: 0,
        strike: 0,
    };
    for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
        for (let userIndex = 0; userIndex < 3; userIndex++) {
            countAfterCompareNumbers(count, computerNumbersArray, computerIndex, userNumbersArray, userIndex);
        }
    }
    return count;
}

const countAfterCompareNumbers = (count, computerNumbersArray, computerIndex, userNumbersArray, userIndex) => {
    if (computerNumbersArray[computerIndex] === userNumbersArray[userIndex]) {
        if (computerIndex === userIndex) {
            count.strike++;
        } else {
            count.ball++;
        }
    }
}

const printBallStrike = (ball, strike) => {
    let textArray = [];
    if (ball !== 0) {
        textArray.push(`${ball}볼`);
    }
    if (strike !== 0) {
        textArray.push(`${strike}스트라이크`);
    }

    let text = '낫싱';
    if (textArray.length > 0) {
        text = textArray.join(' ');
    }
    MissionUtils.Console.print(text);
}


module.exports = {
    generateRandomBallNumber,
    countBallStrike,
    printBallStrike
};