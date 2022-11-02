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
}

module.exports = App;
