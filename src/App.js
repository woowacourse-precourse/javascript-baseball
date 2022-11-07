const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() { }

  computerRandomNumber() {
    let computerNumber = [];
    while (computerNumber.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(NUMBER)) {
        computerNumber.push(NUMBER);
      }
    }
    return computerNumber;
  };

  checkUserInputType(userInput) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(Number(userInput[i]))) {
        throw new Error('숫자로 입력해주세요.');
      }
    }
  };

  checkUserInputLength(userInput) {
    if (userInput.length !== 3) {
      throw new Error('3자리로 입력해주세요.');
    }
  };

  checkUserInputIsDiff(userInput) {
    let uniqueNumber = new Set(userInput);
    if (uniqueNumber.size !== userInput.length) {
      throw new Error('중복없이 숫자를 입력해주세요.');
    }
  };
}

module.exports = App;
