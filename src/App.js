const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.computer = this.getComputerNum();
        this.user = [];
        this.gameOver = false;
        this.ball = 0;
        this.strike = 0;
        this.out = false;
    }

    play() {}
}

module.exports = App;
