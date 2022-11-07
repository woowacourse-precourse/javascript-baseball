const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require('../constant/baseballGame');

class BaseballGame{
  
  startMessage() {
    Console.print(MESSAGE.START);
  }

}
