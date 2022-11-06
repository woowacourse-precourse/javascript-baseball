
const MissionUtils = require("@woowacourse/mission-utils");

const destroyGame = () => {
    MissionUtils.Console.close();
}

const askReplay = () => {
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
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return askReplay();
    }
    playGame(computerNumber);
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