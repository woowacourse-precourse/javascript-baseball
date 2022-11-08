const MissionUtils = require('@woowacourse/mission-utils');

let RANDOM_NUMBER;

function generateRandomNumber() {
    RANDOM_NUMBER = parseInt(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('')
    );
    return RANDOM_NUMBER;
}

function startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (response) => {
        checkUserInput(response);
    });
}

function endGame() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    whetherContinueGame();
}

function whetherContinueGame() {
    MissionUtils.Console.print(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    MissionUtils.Console.readLine('', (response) => {
        if (response === '1') {
        } else if (response === '2') {
            MissionUtils.Console.close();
        } else {
            throw new Error('1 혹은 2를 입력하세요.');
        }
    });
}

function getResultMessage(input) {
    let result = countBallandStrike(input);
    let answer = '';

    if (result.ball === 0 && result.strike === 0) {
        return '낫싱';
    }
    if (result.ball > 0) answer += `${result.ball}볼 `;
    if (result.strike > 0) answer += `${result.strike}스트라이크`;
    return answer;
}

function printResultMessage(input) {
    if (input === RANDOM_NUMBER) {
        MissionUtils.Console.print('3스트라이크');
        endGame();
    } else {
        MissionUtils.Console.print(getResultMessage(input));
    }
}

function checkInputForMat(input) {
    const regExp = /^[1-9]{3}$/;
    if (!regExp.test(input))
        throw Error(
            '1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요.'
        );

    if (
        input[0] === input[1] ||
        input[0] === input[2] ||
        input[1] === input[2]
    ) {
        throw Error(
            '1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요.'
        );
    }
}

function checkUserInput(input) {
    checkInputForMat(input);
    printResultMessage(input);

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (response) => {
        checkUserInput(response);
    });
}

class App {
    play() {
        generateRandomNumber();
        startGame();
    }
}

module.exports = checkUserInput;
