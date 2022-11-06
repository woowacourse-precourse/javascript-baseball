class Computer {

    setBalls(){
        while (this.balls.length < 3) {
            const NUMBER = MissionUtils.Random.pickNumberInRange(1,9);
            if (!this.balls.includes(NUMBER)) {
                this.balls.push(NUMBER);
            }
        }
    }

}

module.exports = Computer;