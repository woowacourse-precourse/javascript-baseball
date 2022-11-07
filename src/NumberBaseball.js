const MissionUtils = require('@woowacourse/mission-utils');

class NumberBaseball {
  async gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let answer = this.makeAnswer();
    console.log(answer);

    this.tryCycle();
    // close는 게임 끝났을 때 넣어야 함 - js 비동기 조심할 것
  }

  tryCycle() {
    this.getUserReply((reply) => {
      console.log(reply);
    });
  }

  makeAnswer() {
    const pickedNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return pickedNumber;
  }

  getUserReply(callbackFunc) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      // 오류입력 체크 들어가야 할 부분
      callbackFunc([...answer].map((x) => Number(x)));
    });
  }
}
module.exports = NumberBaseball;
