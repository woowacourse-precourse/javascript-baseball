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

    // 3자리 숫자 입력 받기.
    getThreeDigitNumber() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
            console.log(input);
        });
    }

    play() {
        MissionUtils.Console.print('숫자야구 게임을 시작합니다.');

        const RANDOM_NUMBER = this.generateRandomNumber();
        this.getThreeDigitNumber();
    }
}

const app = new App();
app.play();

module.exports = App;
