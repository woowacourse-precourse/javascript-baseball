const MissionUtils = require("@woowacourse/mission-utils");

class App {
    constructor() {}

    getRandomNumber() {
        this.computer = [];
        while (this.computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.computer.includes(number)) {
                this.computer.push(number);
            }
        }
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }

    getInputNumber() {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
            this.inputNumber = String(number).split("");
            this.checkInputNumber(this.inputNumber);
        });
    }

    getBalls(inputNumber) {
        let ball = 0;
        for (let i = 0; i < inputNumber.length; i++) {
            const number = Number(inputNumber[i]);
            if (
                this.computer.includes(number) &&
                this.computer.indexOf(number) !== i
            ) {
                ball++;
            }
        }
        return ball;
    }

    getStrikes(inputNumber) {
        let strike = 0;
        for (let i = 0; i < inputNumber.length; i++) {
            const number = Number(inputNumber[i]);
            if (number === this.computer[i]) {
                strike++;
            }
        }
        return strike;
    }

    threeStrikes() {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.readLine(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
            (number) => {
                if (number == 1) {
                    this.getRandomNumber();
                    this.getInputNumber();
                } else if (number == 2) {
                    MissionUtils.Console.close();
                } else {
                    throw "입력값이 잘못되었습니다.";
                }
            }
        );
    }

    getHintMessage(inputNumber) {
        const ball = this.getBalls(inputNumber);
        const strike = this.getStrikes(inputNumber);
        if (strike === 3) {
            this.threeStrikes();
        } else if (ball > 0 && strike === 0) {
            MissionUtils.Console.print(`${ball}볼`);
            this.getInputNumber();
        } else if (ball > 0 && strike > 0) {
            MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
            this.getInputNumber();
        } else if (ball === 0 && strike > 0) {
            MissionUtils.Console.print(`${strike}스트라이크`);
            this.getInputNumber();
        } else if (ball === 0 && strike === 0) {
            MissionUtils.Console.print("낫싱");
            this.getInputNumber();
        }
    }

    checkInputNumber(inputNumber) {
        const number = inputNumber.filter(
            (num, idx, arr) => arr.indexOf(num) === arr.lastIndexOf(num)
        );
        if (
            inputNumber.includes("0") ||
            inputNumber.length !== 3 ||
            Number(inputNumber.join("")) === NaN ||
            number.length !== 3
        ) {
            throw "입력값이 잘못되었습니다.";
        } else {
            this.getHintMessage(inputNumber);
        }
    }

    play() {
        this.getRandomNumber();
        this.getInputNumber();
    }
}

module.exports = App;
