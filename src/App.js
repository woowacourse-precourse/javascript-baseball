const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        startGuidePrint();
    }
}

const app = new App();
app.play();

function startGuidePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}