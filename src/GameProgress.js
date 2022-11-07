const { Console } = require("@woowacourse/mission-utils");
const UserNumber = require("./UserNumber");
const CreateNumber = require("./CreateNumber");

class GameProgress{
    constructor(){
        this.createNumber = new CreateNumber(); 
        this.userNumber = new UserNumber();
    }

    userComputerCompare(userNumber, createNumber){
        let strike = 0;
        let ball = 0;
        createNumber.forEach((number , index) => {
        if(userNumber.includes(number)){
            if(number == Number(userNumber[index])){
                strike += 1;
            }
            else{
                ball +=1;
            }
        }
    })
    this.nothing(strike, ball);
    this.allStrike(strike, ball);
    this.allBall(strike, ball);
    this.strikeAndBall(strike, ball);
    this.threeStrike(strike);
    }

    allStrike(strike, ball){
    if(strike > 0 && ball == 0){
        Console.print(`${strike}` + '스트라이크');
    }
}

    threeStrike(strike){
        if(strike == 3){
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        }
    }


    allBall(strike, ball){
    if(strike == 0 && ball > 0){
        Console.print(`${ball}` + '볼');
    }
}

    strikeAndBall(strike,ball){
    if(strike > 0 && ball > 0){
        Console.print(`${strike}`+ '스트라이크' , `${ball}` + 볼);
    }
}

    nothing(strike, ball){
    if(strike == 0 && ball == 0 ){
        Console.print('낫싱');
    }
}
}

module.exports = GameProgress ;