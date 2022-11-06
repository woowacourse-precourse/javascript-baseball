const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = [];
    let strikeCount;
    let ballCount;
    let nothing;

    // 컴퓨터의 랜덤한 숫자 3개
    function computerNumbers() {
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }
    // 숫자 입력
    MissionUtils.Console.readLine("숫자를 입력해주세요", (answer) => {
      strikeCount = 0;
      ballCount = 0;
      nothing = 0;

      // 스트라이크, 볼, 낫싱 체크
      computer.map((e, i) => {
        if (answer.includes(e)) {
          return answer.indexOf(e) === i ? strikeCount++ : ballCount++;
        } else nothing++;
      });
    });

    computerNumbers();
  }
}

module.exports = App;
