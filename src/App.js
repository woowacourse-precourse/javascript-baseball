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

    //숫자야구게임 시작함수.
    play() {
        this.printStartMessage();
        this.tryCheckingAnswer();
    }

    //게임의 시작메세지를 출력하는 함수.
    printStartMessage() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }

    //사용자의 숫자 입력을 받는 함수.
    tryCheckingAnswer() {
        MissionUtils.Console.readLine('숫자 3개를 입력하세요 : ', (answer) => {
            this.checkException(answer);
            this.user = answer.split('');
        });
    }

    checkException(answer) {
        let isNumber = /^[1-9]+$/;
        let arrToAnswer = answer.split('');
        let checkInputDuplicate = [...new Set(arrToAnswer)];

        if (!isNumber.test(answer)) {
            throw '[error] : 1-9까지의 숫자만 입력 가능합니다.';
        }
        if (checkInputDuplicate.length > 3) {
            throw '[error] : 3개 이하의 숫자를 입력해주세요!!';
        } else if (checkInputDuplicate.length < 3 && arrToAnswer.length === 3) {
            throw '[error] : 중복된 숫자를 입력할 수 없습니다.';
        }
        return true;
    }
}

module.exports = App;
