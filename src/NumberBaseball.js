const MissionUtils = require("@woowacourse/mission-utils");

class NumberBaseball {
  async gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const answer = this.makeAnswer();
    console.log(`정답${answer}`);

    this.tryCycle(answer);
    // close는 게임 끝났을 때 넣어야 함 - js 비동기 조심할 것
  }

  tryCycle(answer) {
    this.getUserReply((reply) => {
      const tryResult = this.checkUserReply(reply, answer);
      if (tryResult.ball === 0 && tryResult.strike === 0) {
        MissionUtils.Console.print("낫싱");
      } else {
        MissionUtils.Console.print(
          `${tryResult.ball}볼 ${tryResult.strike}스트라이크`
        );
      }
      if (tryResult.strike === 3) {
        console.log("정답처리 해야 할 곳");
      }
    });
  }

  makeAnswer() {
    const pickedNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return pickedNumber;
  }

  getUserReply(callbackFunc) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (reply) => {
      // 오류입력 체크 들어가야 할 부분
      callbackFunc([...reply].map((x) => Number(x)));
    });
  }

  checkUserReply(reply, answer) {
    const BALL_COUNT = reply.filter(
      (x, index) => answer.includes(x) && answer[index] !== x
    ).length;
    const STRIKE_COUNT = reply.filter((x, index) => x === answer[index]).length;

    return { ball: BALL_COUNT, strike: STRIKE_COUNT };
  }
}
module.exports = NumberBaseball;
