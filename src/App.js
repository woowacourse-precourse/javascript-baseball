const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('../src/Exception');
const constant = require('./Constant');

class App {
    constructor() {
        this.answer = this.setAnswer();
    }
    setAnswer() {
        let answer = new Set();
        while (answer.size < 3) {
            answer.add(MissionUtils.Random.pickNumberInRange(1, 9));
        }
        return [...answer].join('');
    }
    play() {
        MissionUtils.Console.print(constant.GAME_START);
        this.process();
    }
    process() {
        MissionUtils.Console.readLine(constant.INPUT_QUESTIONS, (number) => {
            this.verification(number, 1);
            const judgement = this.judge(number);
            MissionUtils.Console.print(judgement);
            if (judgement === constant.THREE_STRIKE) {
                MissionUtils.Console.print(constant.GAME_OVER);
                this.replay();
            } else {
                this.process();
            }
        });
    }
    replay() {
        MissionUtils.Console.readLine(constant.REPLAY_QUESTIONS, (number) => {
            if (number === '1') {
                this.answer = this.setAnswer();
                this.process();
            } else if (number === '2') {
                MissionUtils.Console.close();
            } else {
                this.verification(number, 2);
            }
        });
    }
    judge(number) {
        const [ball, strike] = this.countBallAndStrike(number);

        if (!strike && !ball) {
            return '낫싱';
        } else if (strike && !ball) {
            return `${strike}스트라이크`;
        } else if (!strike && ball) {
            return `${ball}볼`;
        } else {
            return `${ball}볼 ${strike}스트라이크`;
        }
    }
    countBallAndStrike(number) {
        let ball = 0;
        let strike = 0;

        for (let index = 0; index < this.answer.length; index++) {
            const check = number.indexOf(this.answer[index]);
            if (check > -1) check === index ? strike++ : ball++;
        }

        return [ball, strike];
    }
    verification(input, type) {
        const exception = new Exception(input, type);
        if (type == 1) {
            exception.checkInputException();
        } else {
            exception.checkReplayInputException();
        }
    }
}

const app = new App();
app.play();

module.exports = App;
