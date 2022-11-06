const { Random, Console } = require('@woowacourse/mission-utils');
const { validateNumbers } = require('./error');
const { compareNumbers } = require('./number');
let { computerStore } = require('./store');

const [computerState, computerSetState] = computerStore();

function extractComputerNumber() {
    while (computerState().length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!computerState().includes(number)) {
            computerSetState(number);
        }
    }
}

function inputUserNumber(userNumber) {
    const input = userNumber.split('').map(Number);
    validateNumbers(input);

    if (compareNumbers(input, computerState())) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else {
        return baseballGameStart();
    }
}

function baseballGameStart() {
    Console.readLine('숫자를 입력해주세요 : ', inputUserNumber)
}

module.exports = {
    extractComputerNumber,
    baseballGameStart,
}