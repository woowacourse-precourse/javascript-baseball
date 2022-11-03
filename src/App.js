const MissionUtils = require("@woowacourse/mission-utils");

class App {
    constructor() {}

    getRandomNumber() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
    }

    play() {}
}

const app = new App();

module.exports = App;
