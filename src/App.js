const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        // 1. 게임시작 멘트
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        const computerDefinedArr = this.computerDefine();
        this.userInputValue(computerDefinedArr, this.resetResult());
    }
}

const app = new App();
app.play();

module.exports = App;
