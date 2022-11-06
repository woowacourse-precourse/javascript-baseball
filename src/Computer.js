const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
    constructor(){
        this.balls=[];
        this.setBalls();
    }

    setBalls(){
        while (this.balls.length < 3) {
            const NUMBER = MissionUtils.Random.pickNumberInRange(1,9);
            if (!this.balls.includes(NUMBER)) {
                this.balls.push(NUMBER);
            }
        }
    }

    getBalls(){
        return this.balls;
    }
}

module.exports = Computer;