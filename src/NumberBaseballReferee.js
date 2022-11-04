const { MissionUtils } = require("@woowacourse/mission-utils");

function numberBaseballReferee(strike, ball){
    allStrike(strike,ball);
    allBall(strike, ball);
}

function allStrike(strike, ball){
    if(strike > 0 && ball == 0){
        MissionUtils.Console.print(`${strike}` +스트라이크);
    }
    if(strike == 3){
        MissionUtils.console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
}

function allBall(strike, ball){
    if(strike == 0 && ball > 0){
        MissionUtils.Console.print(`${ball}` + 볼);
    }
}