const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START = '숫자 야구 게임을 시작합니다.';
const THREE_STRIKE = '3스트라이크';
const GAME_OVER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

class App {
    constructor() {
        this.answer = this.setAnswer();
    }
    setAnswer() {
        let answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
            ''
        );

        return answer;
    }
    play() {
        MissionUtils.Console.print(GAME_START);
        this.input();
    }
    input() {
        MissionUtils.Console.readLine('숫자를 입력하세요.', (number) => {
            const comment = this.match(number);
            MissionUtils.Console.print(comment);
            if (comment === THREE_STRIKE) {
                MissionUtils.Console.print(GAME_OVER);
                MissionUtils.Console.close();
            } else {
                this.input();
            }
        });
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
}

const app = new App();
app.play();

module.exports = App;
