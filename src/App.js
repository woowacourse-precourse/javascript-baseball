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

    // S, B, N의 개수를 담은 객체를 리턴.
    checkSBN(userInput) {
        let strike = 0;
        let ball = 0;
        let nothing = 0;

        // ball의 개수 세기.
        for (let char of userInput) {
            if (this.RANDOM_NUMBER.includes(char)) ball++;
        }

        // ball이 0 이면 낫씽
        if (ball === 0) nothing = 1;

        // strike 개수 세기. strike 발견하면 ball--
        for (let i = 0; i < 3; i++) {
            if (userInput[i] === this.RANDOM_NUMBER[i]) {
                strike++;
                ball--;
            }
        }
        return { strike, ball, nothing };
    }

    // 올바른 입력인지 판단하고, invalid면 throw를 던진다.
    validCheck(userInput) {
        // 길이가 3이 아닌 경우.
        if (userInput.length !== 3) {
            throw '3자리 숫자를 입력하세요';
        }
        // 숫자가 아닌 문자 또는 0이 들어 있는 경우.
        const numbers = '123456789';
        for (let num of userInput) {
            if (!numbers.includes(num)) {
                throw '0을 제외한 숫자만 입력 가능합니다';
            }
        }
        // 중복이 있을 경우.
        const count = new Array(10);
        for (let char of userInput) {
            if (count[Number(char)]) {
                throw '서로 다른 3자리 숫자를 입력하세요';
            } else {
                count[Number(char)] = 1;
            }
        }
        return true;
    }

    // S, B, N을 출력한다.
    printResult(result) {
        // 정보 출력하기.
        if (result.nothing === 1) {
            MissionUtils.Console.print('낫싱');
        } else if (result.strike && result.ball) {
            MissionUtils.Console.print(
                `${result.ball}볼 ${result.strike}스트라이크`
            );
        } else if (result.strike !== 0) {
            MissionUtils.Console.print(`${result.strike}스트라이크`);
        } else if (result.ball !== 0) {
            MissionUtils.Console.print(`${result.ball}볼`);
        }
    }

    // 3자리 숫자 입력 받고, 로직을 처리한다.
    getThreeDigitNumber() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
            this.validCheck(userInput); // invalid의 경우 throw.

            const result = this.checkSBN(userInput);
            this.printResult(result);
            if (result.strike !== 3) {
                this.getThreeDigitNumber();
            } else if (result.strike === 3) {
                MissionUtils.Console.print(
                    '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
                );
                this.query();
            }
        });
    }

    // 새로운 게임 할 것인지 질문.
    query() {
        MissionUtils.Console.readLine(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
            (choice) => {
                if (Number(choice) === 1) {
                    this.play();
                } else {
                    MissionUtils.Console.close();
                }
            }
        );
    }

    play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        this.RANDOM_NUMBER = this.generateRandomNumber();
        try {
            this.getThreeDigitNumber();
        } catch (exceptionMessage) {
            MissionUtils.Console.print(exceptionMessage);
        }
    }
}

// const app = new App();
// app.play();

module.exports = App;
