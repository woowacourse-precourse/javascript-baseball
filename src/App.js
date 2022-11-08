const MissionUtils = require('@woowacourse/mission-utils'); // module import.

class App {
    constructor() {
        this.RANDOM_NUMBER = 0;
    }
    // 랜덤한 3자리 숫자를 생성하고 리턴.
    generateRandomNumber() {
        const randomNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
            1,
            9,
            3
        );
        return randomNumberArray.join('');
    }

    // 스트라이크(S), 볼(B), 낫씽(N) 판단하고 결과를 리턴.
    checkSBN(userInput) {
        let strike = 0;
        let ball = 0;
        let nothing = 0;

        // ball의 개수 세기.
        for (let char of userInput) {
            if (this.RANDOM_NUMBER.includes(char)) ball++;
        }

        // ball == 0 이면 낫씽
        if (!ball) nothing = 1;

        // strike 개수 세기. strike 발견하면 ball--
        for (let i = 0; i < 3; i++) {
            if (userInput[i] == this.RANDOM_NUMBER[i]) {
                strike++;
                ball--;
            }
        }
        return { strike, ball, nothing };
    }

    // 3자리 숫자 입력 받아서 로직 처리.
    getThreeDigitNumber() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
            const result = this.checkSBN(userInput);
        });
    }

    play() {
        MissionUtils.Console.print('숫자야구 게임을 시작합니다.');

        this.RANDOM_NUMBER = this.generateRandomNumber();
        this.getThreeDigitNumber();
    }
}

const app = new App();
app.play();

module.exports = App;
