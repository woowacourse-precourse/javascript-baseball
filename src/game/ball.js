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
    // 코드 분리가 필요한 부분
    let ball = 0;
    let strike = 0;
    for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
        for (let userIndex = 0; userIndex < 3; userIndex++) {
            if (computerNumbersArray[computerIndex] === userNumbersArray[userIndex]) {
                if (computerIndex === userIndex) {
                    strike++;
                } else {
                    ball++;
                }
            }
        }
    }
    return { ball, strike }
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