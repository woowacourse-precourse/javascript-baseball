const MissionUtils = require("@woowacourse/mission-utils");

class App {
    constructor() {
        this.computer = [];
    }

    getRandomNumber() {
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

    getHintMessage(inputNumber) {
        let hintMessage = "";
        const ball = this.getBalls(inputNumber);
        const strike = this.getStrikes(inputNumber);
        if (ball > 0) {
            hintMessage += `${ball}볼`;
        }
        if (ball > 0 && strike > 0) {
            hintMessage += " ";
        }
        if (strike > 0) {
            hintMessage += `${strike}스트라이크`;
        }
        if (ball === 0 && strike === 0) {
            hintMessage += "낫싱";
        }
        return hintMessage;
    }

    checkInputNumber(inputNumber) {
        const number = inputNumber.filter(
            (num, idx, arr) => arr.indexOf(num) === arr.lastIndexOf(num)
        );
        if (
            inputNumber.length !== 3 ||
            Number(inputNumber.join("")) === NaN ||
            number.length !== 3
        ) {
            throw "입력값이 잘못되었습니다.";
        } else {
            MissionUtils.Console.print(this.getHintMessage(inputNumber));
        }
    }

    play() {}
}

module.exports = App;
