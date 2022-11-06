
const MissionUtils = require("@woowacourse/mission-utils");
const {
    generateRandomBallNumber,
    countBallStrike,
    printBallStrike
} = require("./ball");
const { isValidBallNumber } = require("./validation");

const destroyGame = () => {
    MissionUtils.Console.close();
}

const askReplay = () => {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (replay) => {
        if (replay === "1") {
            return init();
        } else if (replay === "2") {
            return destroyGame();
        } else {
            throw new Error();
        }
    });
}

const ballManager = (computerNumber, userNumber) => {
    if (computerNumber === userNumber) {
        MissionUtils.Console.print('3스트라이크');
        return askReplay();
    }
    const computerNumbersArray = computerNumber.split('');
    const userNumbersArray = userNumber.split('');
    const { ball, strike } = countBallStrike(computerNumbersArray, userNumbersArray);
    printBallStrike(ball, strike);
    playGame(computerNumber);
}

const playGame = (computerNumber) => {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => {
        if (!isValidBallNumber(userNumber)) {
            throw new Error();
        }
        ballManager(computerNumber, userNumber);
    });
}

const init = () => {
    const computerNumber = generateRandomBallNumber();
    playGame(computerNumber);
}

module.exports = init;