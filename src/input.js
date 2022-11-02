const { Random, Console } = require('@woowacourse/mission-utils');

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