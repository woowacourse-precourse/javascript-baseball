const { Console } = require('@woowacourse/mission-utils');

function outputCompareNumbersResult(strike, ball) {
    if (!strike && !ball) {
        Console.print('낫싱');
    } else if (strike === 0 && ball > 0) {
        Console.print(`${ball}볼`);
    } else if (strike > 0 && ball === 0) {
        Console.print(`${strike}스트라이크`);
    } else {
        Console.print(`${ball}볼 ${strike}스트라이크`);
    }
}


function compareNumbers(userInput, computer) {
    let strike = 0;
    let ball = 0;

    userInput.forEach((v, i) => {
        if (v === computer[i]) strike++;
        else if (computer.includes(v)) ball++;
    })

    outputCompareNumbersResult(strike, ball);

    return strike === 3;
}

exports.compareNumbers = compareNumbers;