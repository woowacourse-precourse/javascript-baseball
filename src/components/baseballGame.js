const { Console, Random } = require("@woowacourse/mission-utils");
const { NUMBER, MESSAGE, GAME , ERROR} = require('../constant/baseballGame');

class BaseballGame{

    start() {
        const answer = this.createAnswer();

        this.startMessage();
        this.inputNumber(answer);
    }

    progress(answer, strike) {
        if(strike === 3){
            Console.print(MESSAGE.END);
            this.inputRestartOrEnd();
        }
    
        this.inputNumber(answer);
    }

    startMessage() {
        Console.print(MESSAGE.START);
    }

    resultMessage(answer, number) {
        const ball = this.getBall(answer, number);
        const strike = this.getStrike(answer, number);

        let message = ``;

        if(ball){ 
            message += `${ball}${GAME.BALL} `; 
        }

        if(strike){ 
            message += `${strike}${GAME.STRIKE}`; 
        }

        if(!ball && !strike){ 
            message += `${GAME.NOTHING}`; 
        }

        Console.print(message);
        this.progress(answer, strike);
    }

    getBall(answer, inputNumber){
        let ball = 0;
        
        [...inputNumber].forEach((number, index) => {
            if(number !== answer[index] && answer.includes(number)){
                ball++;
            }
        });

        return ball;
    }

    getStrike(answer, inputNumber){
        let strike = 0;
        
        [...inputNumber].forEach((number, index) => {
            if(number === answer[index]) {
                strike++;
            }
        });

        return strike;
    }

    createAnswer() {
        const answer = [];

        while (answer.length < NUMBER.DIGIT) {
            const number = Random.pickNumberInRange(NUMBER.MINIMUM_RANGE, NUMBER.MAXIMUM_RANGE);

            if (!answer.includes(number)) {
                answer.push(number);
            }
        }

        return answer.join('');
    }

    inputNumber(answer) {
        Console.readLine(MESSAGE.INPUT, (inputNumber) => {
            this.validateInputNumber(inputNumber);
            this.resultMessage(answer, inputNumber);
        });
    }

    validateInputNumber(number) {
        if (!(typeof Number(number) === "number")) {
            throw new Error("숫자를 입력하세요.");
        }
        if ([...new Set(number)].length !== NUMBER.DIGIT){
            throw new Error("중복되지 않은 수를 입력하세요.");
        }
        if (number.length !== NUMBER.DIGIT) {
            throw new Error("3자리 수를 입력하세요.");
        }
    }

    inputRestartOrEnd() {
        Console.readLine(MESSAGE.OPTION, (inputNumber) => {
            if(inputNumber === '1'){
                this.start();
            }
            if(inputNumber === '2'){
                Console.close();
            }
        });
    }
    
    validateInputRestartOrEnd() {
        if(inputNumber !== '1' && inputNumber !== '2'){
            throw new Error(ERROR.OPTION);
        }
    }

}

module.exports = BaseballGame;
