const MissionUtils = require("@woowacourse/mission-utils");

function createAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

let isFirstStart = true;
function printStartMassage() {
    isFirstStart && MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
}

function getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
        console.log("결과");
        getUserInput();
    });
}

class App {
    play() {
        const COMPUTER_NUMBER = createAnswer();
        printStartMassage();
        getUserInput();
    }
}

const app = new App();
app.play();

module.exports = App;
