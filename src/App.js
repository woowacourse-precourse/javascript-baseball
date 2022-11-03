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

  inputUniqueThreeNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      // 입력한 숫자와 정답의 비교 결과 출력
    });
  }

  play() {}
}

module.exports = App;
