const MissionUtils = require("@woowacourse/mission-utils");
class App {
    play() {
        MissionUtils.Console.print(MESSAGE.START_GAME);
        return this.getComputerNumbers();
    }
}
module.exports = App;
