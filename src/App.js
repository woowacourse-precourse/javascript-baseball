const MissionUtils = require('@woowacourse/mission-utils'); // module import.

class App {
    // 랜덤한 3자리 숫자를 생성하고 리턴.
    generateRandomNumber() {
        const randomNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
            1,
            9,
            3
        );
        return randomNumberArray.join('');
    }

    play() {
        const RANDOM_NUMBER = this.generateRandomNumber();
    }
}

const app = new App();
app.play();

module.exports = App;
