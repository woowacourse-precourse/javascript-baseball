class App {
  play() {
    const MissionUtils = require('@woowacourse/mission-utils');
    const computer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    var strike = 0;
    var ball = 0;

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (question) => {
      MissionUtils.Console.print(question);
      MissionUtils.Console.close();
    });
  }
}

module.exports = App;
