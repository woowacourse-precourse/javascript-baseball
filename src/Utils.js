const { Random } = require("@woowacourse/mission-utils");

const ERROR_MESSAGES = {
    NULL: "숫자를 입력해 주세요!",
    SHORT: "3자리 숫자를 입력해 주세요!",
    DUPL: "서로 다른 수를 입력해 주세요!"
}


// 1. random number(컴퓨터 숫자) 생성
function createRandomNumber(randNum) {
    while (randNum.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!randNum.includes(number)) {
            randNum.push(number);
        }
    }
    return randNum
}

function validateInput(input) {
    if (input.length === 0) {
        throw ERROR_MESSAGES.NULL;
    }
    if (input.length > 3) {
        throw ERROR_MESSAGES.SHORT;
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[i + 1]) {
            throw ERROR_MESSAGES.DUPL;
        }
    }
}

module.exports = { createRandomNumber, validateInput };