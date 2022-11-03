const { Console } = require('@woowacourse/mission-utils');

class testCode {
  getUserInputNum() {
    const userInputNum = [];

    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      userInputNum.push(...answer.split('').map(Number));
    });
    return userInputNum;
  }
}

const test = new testCode();
test.getUserInputNum();
