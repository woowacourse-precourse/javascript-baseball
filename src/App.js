const THREE_STRIKE = '3스트라이크';

class App {
    constructor() {
        this.answer = '123';
        this.numbers = ['456', '132', '123'];
    }
    play() {
        console.log('숫자 야구 게임을 시작합니다.');
        this.input(this.numbers);
    }
    input(numbers) {
        for (let number of numbers) {
            console.log(`숫자를 입력해주세요 : ${number}`);
            let comment = this.match(number);
            console.log(comment);

            if (comment === THREE_STRIKE) {
                console.log(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
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
}

const app = new App();
app.play();

module.exports = App;
