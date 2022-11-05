const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START = '숫자 야구 게임을 시작합니다.';
const THREE_STRIKE = '3스트라이크';
const GAME_OVER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

class App {
    constructor() {
        this.answer = '123';
    }
    play() {
        MissionUtils.Console.print(GAME_START);
        // this.input();
        this.input2();
    }
    async input() {
        for await (const number of this.question('숫자를 입력하세요.')) {
            const comment = this.match(number);
            MissionUtils.Console.print(comment);
            if (comment === THREE_STRIKE) {
                MissionUtils.Console.print(GAME_OVER);
                break;
            }
        }
    }
    match(number) {
        let ball = 0;
        let strike = 0;

        for (let index = 0; index < this.answer.length; index++) {
            const check = number.indexOf(this.answer[index]);
            // 분리할것!
            if (check > -1) {
                if (check === index) {
                    strike++;
                } else {
                    ball++;
                }
            }
        }

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
    async *question(query) {
        try {
            while (1) {
                yield new Promise((resolve) =>
                    MissionUtils.Console.readLine(query, resolve)
                );
            }
        } finally {
            MissionUtils.Console.close();
        }
    }
}

const app = new App();
app.play();

module.exports = App;
