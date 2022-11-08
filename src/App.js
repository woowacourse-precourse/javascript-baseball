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
        MissionUtils.Console.readLine(MESSAGE.REQUIRE_NUMBER, (userNumbers) => {});
    }
}
module.exports = App;
