const { MissionUtils } = require("@woowacourse/mission-utils");
 
class UserNumber{
    constructor(){
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        MissionUtils.Console.readLine('숫자를 입력해주세요 :' , (answer) => {
        this.threeDigitsError(answer);
        this.includeZeroError(answer);
        this.isNotNumberError(answer);
        this.overlapNumberError(answer);
        });
        return answer.split("");
    }

    threeDigitsError(answer){
    if(answer.length !==3){
        throw "Error (숫자의 길이가 3이 아닙니다.)" ;
    }
}

    includeZeroError(answer){
    if(answer.includes(0)){
        throw "Error (숫자가 0을 포함하고 있습니다)" ;
    } 
}

    isNotNumberError(answer){
    if(isNaN(answer)){
        throw "Error (숫자 형식이 아닙니다.)" ;
    }
}

    overlapNumberError(answer){
    let userInput = Array.from(answer);
    for(let i = 0 ; i < userInput.length; i++){
        if(userInput[i] == userInput[i+1]){
            throw "Error (중복된 숫자가 있습니다.)" ;
        }
    }
}
}

module.exports = UserNumber ;