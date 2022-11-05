class App {
  play() {
    const MissionUtils = require('@woowacourse/mission-utils');
    const computer = [];
    while (computer.length < 3) {
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
          play.exit();
        }
        if (err == 'short') {
          MissionUtils.Console.print('입력값이 3자리보다 작습니다.');
          play.exit();
        }
        if (err == 'overlap') {
          MissionUtils.Console.print('중복된 숫자가 존재합니다.');
          play.exit();
        }
      }

      var input = question.split('');

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (computer[i] == input[j]) {
            if (i === j) strike++;
            else ball++;
          }
        }
      }
      if (strike > 0 || ball > 0)
        MissionUtils.Console.print(ball + '볼 ' + strike + '스트라이크');
      else MissionUtils.Console.print('낫싱');

      MissionUtils.Console.close();
    });
  }
}

module.exports = App;
