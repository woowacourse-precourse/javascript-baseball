const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  makeRandomNumber() {
    const resultNumber = [];
    while (resultNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!resultNumber.includes(number)) {
        resultNumber.push(number);
      }
    }
    return resultNumber;
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // TODO: 컴퓨터와 입력한 수 비교
    });
  }
  
  stringToNumberArray(string) {
    return [...string].map(char => Number(char));
  }

  compareNumber(userNumber, computerNumber) {
    const result = {
      ball: 0,
      strike: 0,
    };
    
    userNumber.forEach((num, index) => {
      if (num === computerNumber[index]) result.strike += 1;
      else if (computerNumber.includes(num)) result.ball += 1;
    });
    return result;
  }
}

module.exports = App;
