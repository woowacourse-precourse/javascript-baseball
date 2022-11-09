const { Console } = require('@woowacourse/mission-utils');

const getUserInputNumbers = (num) => {
  Console.readLine('숫자를 입력해주세요 :', (userAnswer) => {
    const userInputNumbers = userAnswer.split('').map((number) => parseInt(number, 10));
    isValidUserNumbers(userInputNumbers);
  });
};

const isValidUserNumbers = (userInputNumbers) => {
  const isScope = userInputNumbers.every((number) => (number >= 1 && number <= 9 ? true : false));

  if (!isScope) {
    throw new Error('1 ~ 9까지의 숫자만 입력하세요');
  }
};

module.exports = getUserInputNumbers;
