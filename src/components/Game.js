const MissionUtils = require('@woowacourse/mission-utils');

class Game {
  getUserInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      MissionUtils.Console.print(input);
    });
  }
}

module.exports = Game;
