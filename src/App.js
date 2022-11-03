const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        const createAnswer = () => {
            return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
        };

        let isFirstStart = true;
        const printStartMassage = () => {
            isFirstStart && MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
        };

        const getUserInput = () => {
            MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
                if (number === ANSWER) {
                    console.log("성공");
                }
                getUserInput();
            });
        };

        const ANSWER = createAnswer().join("");

        printStartMassage();
        getUserInput();
    }
}

const app = new App();
app.play();

module.exports = App;
