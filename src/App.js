const MissionUtils = require("@woowacourse/mission-utils");
const userNumbersTester = require("./components/UserNumbersTester");
const ballAndStrikeCountTask = require("./components/BallAndStrikeCountTask");
const ballAndStrikeMessage = require("./components/BallAndStrikeMessage");
const printMessage = require("./components/PrintMessage");
const { MESSAGE, ERROR_MESSAGE, RESTART_OR_STOP } = require("./components/Constants");
class App {
    play() {
        MissionUtils.Console.print(MESSAGE.START_GAME);
        return this.getComputerNumbers();
    }
    getComputerNumbers() {
        const GET_NUMBERS = [];
        GET_NUMBERS.push(MissionUtils.Random.pickNumberInRange(1, 9));
        for (let i = 0; i < 2; i++) {
            const SPACE = MissionUtils.Random.pickNumberInRange(1, 9);
            if (GET_NUMBERS.indexOf(SPACE) === -1) {
                GET_NUMBERS.push(SPACE);
            }
        }

        return this.playTheGame(GET_NUMBERS.join(""));
    }
    playTheGame(computerNumbers) {
        MissionUtils.Console.readLine(MESSAGE.REQUIRE_NUMBER, (userNumbers) => {
            userNumbersTester(userNumbers);
            const BALL_COUNT_RESULT = ballAndStrikeCountTask(computerNumbers, userNumbers);
            const MESSAGE = ballAndStrikeMessage(BALL_COUNT_RESULT.ball, BALL_COUNT_RESULT.strike);
            printMessage(MESSAGE);
            if (BALL_COUNT_RESULT.strike === 3) {
                return this.restartGame();
            }
            return this.playTheGame(computerNumbers);
        });
    }
    restartGame() {
        MissionUtils.Console.print(MESSAGE.CORRECT_ANSWER);
        MissionUtils.Console.readLine(MESSAGE.ASK_RESTART, (userAnswer) => {
            if (userAnswer === RESTART_OR_STOP.RESTART) return this.getComputerNumbers();
            else if (userAnswer === RESTART_OR_STOP.STOP) return MissionUtils.Console.close();
            throw new Error(ERROR_MESSAGE.ONE_OR_TWO);
        });
    }
}
module.exports = App;
