const { MissionUtils } = require("@woowacourse/mission-utils");

function gameStart(answer){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    threeDigitsError(answer);
    includeZeroError(answer);
    isNotNumberError(answer);
    overlapNumberError(answer);
}

function threeDigitsError(answer){
    if(answer.length !==3){
        throw "Error" ;
    }
}

function includeZeroError(answer){
    if(answer.includes(0)){
        throw "Error" ;
    } 
}

function isNotNumberError(answer){
    if(!isNan(answer)){
        throw "Error" ;
    }
}

function overlapNumberError(answer){
    const user_input = Array.from(answer);
    for(let i = 0 ; i < user_input.length; i++){
        if(user_input[i] == user_input[i+1]){
            throw "Error" ; 
        }
    }
}