const { Random, Console } = require('@woowacourse/mission-utils');
const { COMPUTERSTORE, USERSTORE } = require('./store');

const [STATE, SETSTATE] = COMPUTERSTORE();

function extractComputerNumber() {
    while (STATE.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!STATE.includes(number)) {
            SETSTATE(number);
        }
    }
}

function inputUserNumber() {
    Console.readLine('숫자를 입력하세요.\n', (userNumber) => {
        console.log(userNumber);
        Console.close();
    })
}

exports.extractComputerNumber = extractComputerNumber;
exports.inputUserNumber = inputUserNumber;