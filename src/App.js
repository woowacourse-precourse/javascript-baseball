const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('../src/Exception');

const GAME_START = '숫자 야구 게임을 시작합니다.';
const THREE_STRIKE = '3스트라이크';
const GAME_OVER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const REPLAY = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

class App {
    setAnswer() {
        let answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
            ''
        );

        return answer;
    }
    play() {
        const answer = this.setAnswer();
        MissionUtils.Console.print(GAME_START);
        this.process(answer);
    }
    process(answer) {
        MissionUtils.Console.readLine('숫자를 입력하세요.', (number) => {
            this.verification(number, 1);
            const comment = this.match(number, answer);
            MissionUtils.Console.print(comment);
            if (comment === THREE_STRIKE) {
                MissionUtils.Console.print(GAME_OVER);
                this.replay();
            } else {
                this.process(answer);
            }
        });
    }
    replay() {
        MissionUtils.Console.readLine(REPLAY, (number) => {
            if (number === '1') {
                const newAnswer = this.setAnswer();
                this.process(newAnswer);
            } else if (number === '2') {
                MissionUtils.Console.close();
            } else {
                this.verification(number, 2);
            }
        });
    }
    match(number, answer) {
        let ball = 0;
        let strike = 0;

        for (let index = 0; index < answer.length; index++) {
            const check = number.indexOf(answer[index]);
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
