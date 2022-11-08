const MissionUtils = require("@woowacourse/mission-utils");
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
}
module.exports = App;
