const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.computerNumberArray = [];
    }
    play() {
        this.pickRandomThreeNumbers();
        this.pickRandomNumberUser();
    }

    // 랜덤한 3개의 숫자를 뽑는 함수
    pickRandomThreeNumbers() {
        const numberSet = new Set();
        while (numberSet.size !== 3) {
            numberSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
        }
        console.log(Array.from(numberSet));
        return Array.from(numberSet);
    }

    // 유저의 숫자를 입력받는 함수
    pickRandomNumberUser() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
            console.log(answer);
        });
    }
}
let app = new App();
app.play();

module.exports = App;
