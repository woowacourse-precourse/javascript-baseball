const { MissionUtils } = require("@woowacourse/mission-utils");
const UserNumber = require("./UserNumber");
const CreateNumber = require("./CreateNumber");

class NumberBaseballReferee{
    constructor(strike, ball, nothing){

        this.createNumber = new CreateNumber(); 
        this.userNumber = new UserNumber();
        allStrike(strike,ball);
        allBall(strike, ball);
        strikeAndBall(strike,ball);
        nothing(strike, ball);
    }

    allStrike(strike, ball){
    if(strike > 0 && ball == 0){
        MissionUtils.Console.print(`${strike}` +스트라이크);
    }
    if(strike == 3){
        MissionUtils.console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
}

    allBall(strike, ball){
    if(strike == 0 && ball > 0){
        MissionUtils.Console.print(`${ball}` + 볼);
    }
}

    strikeAndBall(strike,ball){
    if(strike > 0 && ball > 0){
        MissionUtils.console.print(`${strike}`+스트라이크 , `${ball}` + 볼);
    }
}

    nothing(strike, ball){
    if(strike == 0 && ball == 0 ){
        MissionUtils.console.print('낫싱');
    }
}
}

module.exports = NumberBaseballReferee ;