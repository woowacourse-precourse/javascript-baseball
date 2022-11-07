const MissionUtils = require("@woowacourse/mission-utils");
class App {
    initGame() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        this.selectComputerNumber();
    }
}
const app = new App;
app.play();
module.exports = App;