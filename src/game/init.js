
const MissionUtils = require("@woowacourse/mission-utils");

const judgeBalls = (computerNumber, userNumber) => {
    MissionUtils.Console.print(`${computerNumber}, ${userNumber}`);
}

const isValidBallNumber = (answer) => {
    if (answer.length !== 3) {
        return false
    }
    if (answer[0] === answer[1] || answer[1] === answer[2] || answer[2] === answer[0]) {
        return false
    }
    if (isNaN(Number(answer))) {
        return false
    }
    return true
}

const playGame = (computerNumber) => {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => {
        if (!isValidBallNumber(userNumber)) {
            throw new Error();
        }
        judgeBalls(computerNumber, userNumber);
    });
}

const generateRandomBallNumber = () => {
    const computerAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerAnswer.join('');
}

const init = () => {
    const computerNumber = generateRandomBallNumber();
    playGame(computerNumber);
}

module.exports = init;