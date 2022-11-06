const MissionUtils = require('@woowacourse/mission-utils');

function generateRandomNumber() {
    const RANDOM_NUMBER = parseInt(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('')
    );
    return RANDOM_NUMBER;
}

class App {
    play() {}
}

module.exports = App;
