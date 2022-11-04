const { Console } = require('@woowacourse/mission-utils');

const checkOverlapNumbers = (userInput) => {
    const obj = {};

    userInput.forEach((v) => {
        obj[v] = (obj[v] || 0) + 1;
    })

    const checkError = Object.values(obj).filter(v => v >= 2).length;

    return checkError;
}

const checkOnlyNumbers = (userInput) => userInput.every(v => parseInt(v));

function validateNumbers(userInput) {
    if (checkOverlapNumbers(userInput)) {
        Console.print("중복되는 숫자를 입력하셨습니다. 게임을 다시 시작해주세요.");
        throw Error("overlap");
    }

    if (!checkOnlyNumbers(userInput)) {
        Console.print("숫자가 아닌 값을 입력하셨습니다. 게임을 다시 시작해주세요.");
        throw Error("not number");
    }
}

exports.validateNumbers = validateNumbers;