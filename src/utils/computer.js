const { Random, Console } = require('@woowacourse/mission-utils');

const generateDifferRandomNumArr = (numOfDigits) => {
  const DIFFER_RANDOM_NUM_ARR = [];
  while (DIFFER_RANDOM_NUM_ARR.length < numOfDigits) {
    const RANDOM_NUM = Random.pickNumberInRange(1, 9);
    if (!DIFFER_RANDOM_NUM_ARR.includes(RANDOM_NUM)) {
      DIFFER_RANDOM_NUM_ARR.push(RANDOM_NUM);
    }
  }
  return DIFFER_RANDOM_NUM_ARR;
};

const getHintOfAnswer = (result) => {
  this.isUserWrong = true;
  if (result.ball === 0 && result.strike === 0) {
    Console.print('낫싱');
    return this.isUserWrong;
  }
  if (result.ball === 0 && result.strike === 3) {
    Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return !this.isUserWrong;
  }
  if (result.ball > 0 && result.strike === 0) {
    Console.print(`${result.ball}볼`);
    return this.isUserWrong;
  }
  if (result.ball === 0 && result.strike > 0) {
    Console.print(`${result.strike}스트라이크`);
    return this.isUserWrong;
  }
  Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
  return this.isUserWrong;
};

const scoreUserInput = (answerArr, userInputArr) => {
  let result = { ball: 0, strike: 0 };

  if (!userInputArr.some((num) => answerArr.includes(num))) {
    return result;
  }
  for (let i = 0; i < answerArr.length; i++) {
    if (answerArr[i] === userInputArr[i]) {
      result.strike += 1;
    }
    if (
      answerArr[i] !== userInputArr[i] &&
      answerArr.includes(userInputArr[i])
    ) {
      result.ball += 1;
    }
  }
  return result;
};

module.exports = {
  generateDifferRandomNumArr,
  getHintOfAnswer,
  scoreUserInput,
};
