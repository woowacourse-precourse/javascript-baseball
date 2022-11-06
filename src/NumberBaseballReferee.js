const { Console } = require("@woowacourse/mission-utils");
const UserNumber = require("./UserNumber");
const CreateNumber = require("./CreateNumber");

class NumberBaseballReferee{
    constructor(strike, ball, nothing){

        this.createNumber = new CreateNumber(); 
        this.userNumber = new UserNumber();
        UserComputerCompare(userNumber, createNumber);
        allStrike(strike,ball);
        allBall(strike, ball);
        strikeAndBall(strike,ball);
        nothing(strike, ball);
    }

    UserComputerCompare(userNumber, createNumber){
        let strike = 0;
        let ball = 0;
        let nothing = 0;
        let strikeBallNothing = [strike, ball, nothing]
       userNumber.foreach((number , index) =>{
        if(createNumber.includes(number)){
            if(number == Number(createNumber[index])){
                strike += 1;
            }
            else{
                ball +=1;
            }
        }
        else{
            nothing +=1;
        }
        })
        return strikeBallNothing; }

    allStrike(strike, ball){
    if(strike > 0 && ball == 0){
        Console.print(`${strike}` +스트라이크);
    }
    if(strike == 3){
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
}

    allBall(strike, ball){
    if(strike == 0 && ball > 0){
        Console.print(`${ball}` + 볼);
    }
}

    strikeAndBall(strike,ball){
    if(strike > 0 && ball > 0){
        Console.print(`${strike}`+스트라이크 , `${ball}` + 볼);
    }
}

    nothing(strike, ball){
    if(strike == 0 && ball == 0 ){
        Console.print('낫싱');
    }
}
}

module.exports = NumberBaseballReferee ;