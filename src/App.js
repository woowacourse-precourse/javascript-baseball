const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerPick() { // 컴퓨터가 1부터 9 사이의 서로다른 3개의 숫자를 정하는 메서드
    const COMPUTER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.close();
    return COMPUTER;
  }
  playerPick() { // 게임 플레이어의 입력을 받는 메서드
    const PLAYER = MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      console.log(`숫자 : ${input}`);
    });
    MissionUtils.Console.close();
    return PLAYER;
  }
  checkNumber(num) { // 플레이어가 입력한 숫자가 서로 다른 3개의 숫자인지 확인하는 메서드
    if (num.length!==3) {
      return false;
    } else if ((num[0]===num[1]) || (num[0]===num[2]) || (num[1]===num[2])) {
      return false;
    }
    return true;
  }
  play() {
  }
}

module.exports = App;
