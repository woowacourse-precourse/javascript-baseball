const { COMPUTERSTORE } = require('./store');
const { Console } = require('@woowacourse/mission-utils');

const computer = COMPUTERSTORE()[0];


function compareNumbers(userInput) {
    let strike = 0;
    let ball = 0;

    userInput.forEach((v, i) => {
        if (v === computer[i]) strike++;
        else if (computer.includes(v)) ball++;
    })

    return strike === 3;
}

exports.compareNumbers = compareNumbers;