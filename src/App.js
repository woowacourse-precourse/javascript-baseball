class App {
    play() {
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        MISSION_UTILS.Console.print('숫자 야구 게임을 시작합니다.');
    }

    isComputerNumbers() {
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        const COMPUTER_NUMBERS = [];
        while (COMPUTER_NUMBERS.length < 3) {
            const RANDOM_NUMBER = MISSION_UTILS.Random.pickNumberInRange(1, 9);
            if (!COMPUTER_NUMBERS.includes(RANDOM_NUMBER)) COMPUTER_NUMBERS.push(RANDOM_NUMBER);
        }
        return parseInt(COMPUTER_NUMBERS.join(''))
    }
}
module.exports = App;