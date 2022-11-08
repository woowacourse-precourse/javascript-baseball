const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        // 1. 게임시작 멘트
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        const computerDefinedArr = this.computerDefine();
        this.userInputValue(computerDefinedArr, this.resetResult());
    }
    // 2. 컴퓨터 숫자값 3개 정하기
    computerDefine() {
        const computerDefinedArr = [];
        while (computerDefinedArr.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computerDefinedArr.includes(number)) {
                computerDefinedArr.push(number);
            }
        }
        return computerDefinedArr;
    }

    // 2-1. 결과값 저장
    resetResult() {
        const result = {
            strike: 0,
            ball: 0,
        };
        return result;
    }
}

const app = new App();
app.play();

module.exports = App;
