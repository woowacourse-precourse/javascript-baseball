const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, PLAYING } = require("./Message");

class App {
    play() {
        MissionUtils.Console.print(MESSAGE.START);
        this.gameStart();
    }

    gameStart() {}
}

const app = new App();
app.play();

module.exports = App;
