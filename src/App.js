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
            console.log(this.changeStringToArray(answer));
            return (
                this.changeStringToArray(answer),
                this.validateArray(this.changeStringToArray(answer))
            );
        });
    }

    // 문자열을 배열로 변환하는 함수
    changeStringToArray(string) {
        return string.split('').map((a) => Number(a));
    }

    // 배열의 요소가 중복되는지 검증하는 함수
    validateMultyArray(array) {
        const set = new Set();
        array.map((item) => set.add(item));
        return set.size === 3;
    }

    // 배열의 요소가 숫자인지 검증하는 함수
    validateNumberArray(array) {
        const number = array.map((item) => Number.isNaN(item));
        return !number.includes(true);
    }
    validateArray(userNumberArray) {
        if (
            userNumberArray.length !== 3 ||
            !this.validateMultyArray(userNumberArray) ||
            !this.validateNumberArray(userNumberArray)
        ) {
            console.log('잘못되었습니다.');
        }
    }
}
let app = new App();
app.play();

module.exports = App;
