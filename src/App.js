const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeComNum() {
    // 1. 컴퓨터 랜덤숫자 생성
    // return: [0,0,0]
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let set = new Set();

    while (set.size != 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (num !== 0) set.add(num);
    }
    return [...set];
  }

  play() {}
}

module.exports = App;
