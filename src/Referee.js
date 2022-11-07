const MissionUtils = require("@woowacourse/mission-utils");
const GetError = require("./GetError");
const ComputerNum = require("./ComputerNum");

const compareComputer = ComputerNum.randomNumArr[0]
const compareUser = GetError.userInputArr

const ballsAndStrikes  = function () {
    // const GetError = require("./GetError");
    // const ComputerNum = require("./ComputerNum");

    // const compareComputer = ComputerNum.randomNumArr[0].join("")
    // const compareUser = GetError.userInputArr.join("")
    

    // MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
};

const nothing = function(){

    // const compareComputer = ComputerNum.randomNumArr[0]
    // const compareUser = GetError.userInputArr


    // if(compareUser.length !== 0 && compareUser.filter(duplicated => compareComputer.includes(duplicated)).length === 0){
        MissionUtils.Console.print("낫싱")

        GetError.userInputNum;
    // }
}

const correct = function(){


    // const compareComputer = ComputerNum.randomNumArr[0].join("")
    // const compareUser = GetError.userInputArr.join("")

    // if(compareUser.length !== 0 && compareComputer.join("") === compareUser.join("")){
    //     console.log("와와와")
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료 ")
        // 리겜?!
    // }
}

// ballsAndStrikes()
correct()
nothing()
exports.ballsAndStrikes = ballsAndStrikes;
exports.correct = correct;
exports.nothing = nothing;