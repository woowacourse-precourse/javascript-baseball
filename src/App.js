const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerPick() { // 컴퓨터가 1부터 9 사이의 서로다른 3개의 숫자를 정하는 메서드
    const COMPUTER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.close();
    return COMPUTER;
  }
  playerPick() { // 게임 플레이어의 입력을 받는 메서드
    const PLAYER = MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      console.log(`숫자 : ${input}`);
    });
    MissionUtils.Console.close();
    return PLAYER;
  }
  play() {
  }
}

module.exports = App;
