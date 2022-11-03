const MissionUtils = require("@woowacourse/mission-utils");

function createAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

class App {
    play() {
        const ANSWER = createAnswer();
        console.log(ANSWER);
    }
}

const app = new App();
app.play();

module.exports = App;
