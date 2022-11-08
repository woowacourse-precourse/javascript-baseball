const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/Constants");

class NumberBaseball {
  gameStart() {
    Console.print(MESSAGES.START_GAME);
  }
}
module.exports = NumberBaseball;
