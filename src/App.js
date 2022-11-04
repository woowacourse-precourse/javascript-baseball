const MissionUtils = require("@woowacourse/mission-utils");
const changeToArray = (number) => {
    return number
        .toString()
        .split("")
        .map((num) => parseInt(num), 10);
};
class App {
    play() {
        const createAnswer = () => {
            return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
        };

        let isFirstStart = true;
        const printStartMassage = () => {
            isFirstStart && MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
        };

        const isCorrect = (userInput, answer) => {
            return userInput === answer;
        };

        const getBallCount = (userInput, answer) => {
            const USER_INPUT = changeToArray(userInput);
            const COMPUTER_ANSWER = changeToArray(answer);
            const IS_TRUE = USER_INPUT.map((num, index) => num === COMPUTER_ANSWER[index]);

            let ball = 0;
            USER_INPUT.forEach((num, index) => {
                if (!IS_TRUE[index] && COMPUTER_ANSWER.includes(num)) {
                    ball += 1;
                }
            });
            return `${ball}볼`;
        };

        const getStrikeCount = (userInput, answer) => {};

        const printEndMessage = () => {
            setTimeout(() => {
                MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            }, 800);
            setTimeout(() => {
                MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
            }, 1600);
        };

        const getUserInput = () => {
            MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
                if (isCorrect(input, ANSWER)) {
                    console.log("성공");
                    return printEndMessage();
                }
                MissionUtils.Console.print(getBallCount(input, ANSWER));
                getUserInput();
            });
        };

        const ANSWER = createAnswer();
        console.log(ANSWER);
        printStartMassage();
        getUserInput();
    }
}

const app = new App();
app.play();

module.exports = App;
