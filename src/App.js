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

    //숫자야구게임 종료함수.
    quit() {
        MissionUtils.Console.close();
    }

    // 컴퓨터가 랜덤으로 숫자를 생성하는 함수.
    getComputerNum() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    //사용자의 숫자 입력을 받는 함수.
    tryCheckingAnswer() {
        MissionUtils.Console.readLine('숫자 3개를 입력하세요 : ', (answer) => {
            this.checkException(answer);
            this.user = answer.split('');
            this.checkResult();
            if (this.gameOver) this.printEndMessage();
            this.printResult();
            this.resetCount();
            this.tryCheckingAnswer();
        });
    }

    //게임의 시작메세지를 출력하는 함수.
    printStartMessage() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }

    //strike,ball,out의 결과를 출력하는 함수.
    printResult() {
        if (this.gameOver) {
            MissionUtils.Console.print('3스트라이크');
            MissionUtils.Console.print(
                '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
            );
        } else {
            this.out
                ? MissionUtils.Console.print('낫싱')
                : MissionUtils.Console.print(
                      this.ball + '볼 ' + this.strike + '스트라이크'
                  );
        }
    }

    printEndMessage() {
        MissionUtils.Console.print(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        );
        MissionUtils.Console.readLine('', (answer) => {
            let isNumber = /^[1-2]+$/;
            if (!isNumber.test(answer)) {
                MissionUtils.Console.print('1번과 2번만 눌러주세요!');
            } else {
                if (Number(answer) === 1) {
                    this.resetAll();
                    this.play();
                } else {
                    this.quit();
                }
            }
        });
    }

    resetCount() {
        [this.ball, this.strike, this.out] = [0, 0, false];
    }
    resetAll() {
        this.computer = this.getComputerNum();
        this.user = [];
        this.gameOver = false;
        this.ball = 0;
        this.strike = 0;
        this.out = false;
    }

    //BALL,STRIKE,OUT을 체크하는 함수.
    checkResult() {
        for (let i = 0; i < this.user.length; i++) {
            if (Number(this.user[i]) === Number(this.computer[i])) {
                this.strike++;
            } else if (this.computer.includes(Number(this.user[i]))) {
                this.ball++;
            }
        }

        if (this.strike === 3) this.gameOver = true;

        this.strike === 0 && this.ball === 0
            ? (this.out = true)
            : (this.out = false);
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
