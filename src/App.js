const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.computerNumberArray = [];
    }
    play() {
        this.compareUserAndComputer();
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
    // 같은 자리에 있는지 포함하고 있는지 알려주는 함수
    checkSameOrInclude(array1, array2) {
        let same = 0;
        let include = 0;
        for (let i = 0; i < 3; i++) {
            if (array1[i] === array2[i]) same += 1;
            else if (array1[1].include(array2[i])) include += 1;
        }
        console.log(same, include);
        return same, include;
    }
    // 컴퓨터 값과 유저 값 비교 함수
    compareUserAndComputer() {
        this.pickRandomThreeNumbers();
        this.pickRandomNumberUser();
    }
    // 게임 시작 함수
    start(computerNumberArray, userNumberArray) {
        let strike = 0,
            ball = 0;
        for (let i = 0; i < 3; i++) {
            if (userNumberArray[i] === computerNumberArray[i]) {
                strike += 1;
            } else if (computerNumberArray.include(userNumberArray[i])) {
                ball += 1;
            }
            const resultStrike = strike ? `${strike}스트라이크` : '';
            const resultBall = ball ? `${ball}볼` : '';
            return !ball && !strike ? '낫싱' : `${resultBall} ${resultStrike}`;
        }
    }
}
let app = new App();
app.play();

module.exports = App;
