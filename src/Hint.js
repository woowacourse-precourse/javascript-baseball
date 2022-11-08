class Hint {
    constructor() {
        this.count = {
            strike: 0,
            ball: 0,
        };
    }

    judgePitching(computerNumber, userNumber) {
        this.count.strike = this.countStrike(computerNumber, userNumber);
        this.count.ball = this.countBall(computerNumber, userNumber);
    }
    countStrike(computerNumber, userNumber) {
        return computerNumber.filter((el, idx) => el.toString() === userNumber[idx]).length;
    }
    countBall(computerNumber, userNumber) {
        return computerNumber.filter((el) => userNumber.includes(el.toString())).length;
    }
}

module.exports = Hint;
