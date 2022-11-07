const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.computerNumberArray = [];
    }
    play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다');
        this.computerNumberArray = this.pickRandomThreeNumbers();
        console.log(this.computerNumberArray);
        this.pickRandomNumberUser();
    }

    // 랜덤한 3개의 숫자를 뽑는 함수
    pickRandomThreeNumbers() {
        const numberSet = new Set();
        while (numberSet.size !== 3) {
            numberSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
        }
        return Array.from(numberSet);
    }

    // 유저의 숫자를 입력받는 함수
    pickRandomNumberUser() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
            this.validateArray(this.changeStringToArray(answer));
            this.countStrikeAndBall(this.changeStringToArray(answer));
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
        )
            throw '오류입니다 종료합니다. ';
    }
    // 점수 계산 함수
    countStrikeAndBall(userNumberArray) {
        let strike = 0,
            ball = 0;
        for (let i = 0; i < 3; i++) {
            if (userNumberArray[i] === this.computerNumberArray[i]) {
                strike += 1;
            } else if (this.computerNumberArray.includes(userNumberArray[i])) {
                ball += 1;
            }
        }
        this.resultOfStrikeAndBall([ball, strike]);
    }

    // 점수 출력 함수
    resultOfStrikeAndBall(result) {
        if (result[1] === 3) {
            MissionUtils.Console.print(
                '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
            );
        } else {
            if (result[0] === 0 && result[1] === 0) {
                MissionUtils.Console.print('낫싱');
            } else {
                MissionUtils.Console.print(
                    `${result[0] > 0 ? result[0] + '볼 ' : ''}${
                        result[1] > 0 ? result[1] + '스트라이크' : ''
                    }`
                );
            }
        }
        this.pickRandomNumberUser();
    }
}
let app = new App();
app.play();

module.exports = App;
