const { input, checklength } = require("./Common");

function checkUserInput() {
    let userInput;
    let verification;
    let str = '숫자를 입력해주세요 : ';

    userInput = input(str);
    verification = checklength(str, userInput);

    if (verification === false) {
      return [false, undefined];
    }
    let userInputStr = userInput.split("");
    userInput = userInputStr.map((val) => Number(val));
    return [true, userInput];
}

exports.checkUserInput = checkUserInput;