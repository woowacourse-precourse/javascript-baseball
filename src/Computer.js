const { Random } = require("@woowacourse/mission-utils");
const { OPTION } = require("./message");

class Computer {
    constructor() {
        this.number = [];
    }

    setRandomNumber() {
        this.number = [];
        while (this.number.length < OPTION.PITCH_COUNT) {
            const number = Random.pickNumberInRange(1, 9);
            if (!this.number.includes(number)) {
                this.number.push(number);
            }
        }
        return this.number;
    }
}

module.exports = Computer;
