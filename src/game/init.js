
const MissionUtils = require("@woowacourse/mission-utils");

const destroyGame = () => {
    MissionUtils.Console.close();
}

const askReplay = () => {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (replay) => {
        if (replay === "1") {
            return init();
        }
        else if (replay === "2") {
            return destroyGame();
        }
        else {
            throw new Error();
        }
    });
}

const judgeBalls = (computerNumber, userNumber) => {
    if (computerNumber === userNumber) {
        MissionUtils.Console.print('3스트라이크');
        return askReplay();
    }
    const computerNumbersArray = computerNumber.split('');
    const userNumbersArray = userNumber.split('');
    printBallStrike(computerNumbersArray, userNumbersArray);
    playGame(computerNumber);
}

const printBallStrike = (computerNumbersArray, userNumbersArray) => {
    let text = '';
    let textArray = [];
    let ball = 0;
    let strike = 0;
    for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
        for (let userIndex = 0; userIndex < 3; userIndex++) {
            if (computerNumbersArray[computerIndex] === userNumbersArray[userIndex]) {
                if (computerIndex === userIndex) {
                    strike++;
                }
                else {
                    ball++;
                }
            }
        }
    }

    if (ball !== 0) {
        textArray.push(`${ball}볼`)
    }
    if (strike !== 0) {
        textArray.push(`${strike}스트라이크`)
    }

    if (textArray.length > 0) {
        text = textArray.join(' ')
    }
    else {
        text = '낫싱'
    }
    
    MissionUtils.Console.print(text);
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
    MissionUtils.Console.readLine(computerNumber + '숫자를 입력해주세요 : ', (userNumber) => {
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