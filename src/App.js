const MissionUtils = require("@woowacourse/mission-utils");

const changeToArray = (number) => {
    return number
        .toString()
        .split("")
        .map((num) => parseInt(num), 10);
};
class App {
    printStartMassage() {
        MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
    }
    play() {
        const createAnswer = () => {
            return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
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
            return ball;
        };

        const getStrikeCount = (userInput, answer) => {
            const USER_INPUT = changeToArray(userInput);
            const COMPUTER_ANSWER = changeToArray(answer);

            let strike = 0;
            USER_INPUT.forEach((num, index) => {
                if (num === COMPUTER_ANSWER[index]) {
                    strike += 1;
                }
            });

            return strike;
        };

        const printMassage = (massage) => {
            return MissionUtils.Console.print(massage);
        };

        const inputResult = (userInput, answer) => {
            const BALL = getBallCount(userInput, answer);
            const STRIKE = getStrikeCount(userInput, answer);
            if (BALL === 0 && STRIKE === 0) {
                return printMassage("낫싱");
            }
            if (BALL === 0) {
                return printMassage(`${STRIKE}스트라이크`);
            }
            if (STRIKE === 0) {
                return printMassage(`${BALL}볼`);
            }

            return printMassage(`${BALL}볼 ${STRIKE}스트라이크`);
        };

        const printEndMessage = () => {
            printMassage(`3스트라이크`);
            printMassage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        };

        const choosesNextStep = () => {
            printMassage("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
            MissionUtils.Console.readLine("", (number) => {
                if (number === "1") {
                    playGame();
                }
                if (number === "2") {
                    MissionUtils.Console.close();
                }
            });
        };

        const getUserInput = (answer) => {
            // console.log(answer);

            MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
                if (isCorrect(input, answer)) {
                    printEndMessage();
                    return choosesNextStep();
                }
                inputResult(input, answer);
                getUserInput(answer);
            });
        };

        const playGame = () => {
            let computerAnswer = createAnswer();

            getUserInput(computerAnswer);
        };

        playGame();
    }
}

const app = new App();

app.printStartMassage();
app.play();

module.exports = App;
