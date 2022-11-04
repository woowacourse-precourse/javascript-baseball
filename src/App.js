const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getThreeRandom() {
    const randoms = [];

    while (randoms.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randoms.includes(randomNumber)) {
        randoms.push(randomNumber);
      }
    }
    return randoms.join('');
  };

  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  isUniqueThreeNumber(numbers) {
    return (numbers.length === 3) && (numbers.length === new Set(numbers).size);
  };

  inputNumbers() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      if (this.isUniqueThreeNumber(numbers)) {
        console.log(`${numbers}을 입력하셨습니다.`);
      } else {
        throw new Error('입력 형식에 맞지 않습니다.')
      }
    });
  }

  play() {}
}

module.exports = App;
