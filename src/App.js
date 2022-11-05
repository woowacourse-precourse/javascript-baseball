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
      try {
        if (question.length > 3) throw 'long';
        else if (question.length < 3) throw 'short';
        else if ([...new Set(question)].length !== 3) throw 'overlap';
      } catch (err) {
        if (err == 'long') {
          MissionUtils.Console.print('입력값이 3자리보다 큽니다.');
          process.exit();
        }
        if (err == 'short') {
          MissionUtils.Console.print('입력값이 3자리보다 작습니다.');
          process.exit();
        }
        if (err == 'overlap') {
          MissionUtils.Console.print('중복된 숫자가 존재합니다.');
          process.exit();
        }
      }

      MissionUtils.Console.print(question);
      MissionUtils.Console.close();
    });
  }
}

module.exports = App;
