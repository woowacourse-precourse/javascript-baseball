const { Console, Random } = require("@woowacourse/mission-utils");
const { NUMBER, MESSAGE, GAME } = require('../constant/baseballGame');

class BaseballGame{
  
    start() {
        const answer = this.createAnswer();

        this.startMessage();
        this.inputNumber(answer);
    }

    startMessage() {
        Console.print(MESSAGE.START);
    }

    resultMessage(answer, inputNumber) {
        const ball = this.getBall(answer, inputNumber);
        const strike = this.getStrike(answer, inputNumber);

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

}

module.exports = BaseballGame;
