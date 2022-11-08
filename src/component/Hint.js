class Hint {
    constructor() {
        this.strike = 0;
        this.ball = 0;
    }

    judgePitching(computerNumber, userNumber) {
        const strikeCount = this.countStrike(computerNumber, userNumber);
        const ballCount = this.countBall(computerNumber, userNumber);
        return { strikeCount, ballCount };
    }
    countStrike(computerNumber, userNumber) {
        return computerNumber.filter((el, idx) => el.toString() === userNumber[idx]).length;
    }
    countBall(computerNumber, userNumber) {
        return computerNumber.filter((el) => userNumber.includes(el.toString())).length;
    }
}

module.exports = Hint;
