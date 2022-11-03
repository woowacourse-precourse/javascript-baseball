const MissionUtils = require("@woowacourse/mission-utils");

function createAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

let isFirstStart = true;
function printStartMassage() {
    isFirstStart && MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
}

class App {
    play() {
        const ANSWER = createAnswer();
        printStartMassage();
    }
}

const app = new App();
app.play();

module.exports = App;
