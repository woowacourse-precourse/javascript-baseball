const MissionUtils = require("@woowacourse/mission-utils");

class BaseBallGame{
    construcor(){
        this.score = {};
        this.answer = [];
        this.userAnswer = [];
    }

    start = () => {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        this.enterUserInput();
    };

    setUserAnswer = (userInput) => {
        this.userAnswer = userInput;
    }

    isThreeUniqueNumber = (userInput) => {
        return true ? userInput.length === 3 && new Set(userInput).size === 3 : false;
    }

    isEachVaildNumber = (userInput) => {
        for (let number of userInput){
            if (1 > number || number > 9){
                return false;
            }
        }
        return true;
    }

    isVaildInput = (userInput) => {
        return true ? (this.isThreeUniqueNumber(userInput) && this.isEachVaildNumber(userInput)) : false;
    }

    enterUserInput = () => {
        MissionUtils.Console.readLine("숫자를 입력해주세요", (input) => {
            let userInput = input.split("").map((item) => parseInt(item));
            if (this.isVaildInput(userInput)){
                return
            }else {
                throw new Error("올바르지 않은 값이 입력됐습니다.");
            }
        });
    };
}

module.exports = BaseBallGame
