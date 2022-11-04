const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.computerNumberArray = [];
    }
    play() {
        this.pickRandomThreeNumbers();
    }

    // 랜덤한 3개의 숫자를 뽑는 함수
    pickRandomThreeNumbers() {
        const numberSet = new Set();
        while (numberSet.size !== 3) {
            numberSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
        }
        console.log(Array.from(numberSet));
    }
}
let app = new App();
app.play();

module.exports = App;
