const MissionUtils = require("@woowacourse/mission-utils");

class BaseBallGame{
    construcor(){
        this.score = {};
        this.answer = [];
        this.userAnswer = [];
    }

    start = () => {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        this.setAnswer();
        this.enterUserInput();
    };

    setAnswer = () => {
        this.answer = this.makeThreeUniqueRandomNumber();
    }

    setScore = () => {
        this.score = {"strike" : 0, "ball" : 0};
    }
    
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
                this.setScore();
                this.setUserAnswer(userInput);
                this.compareUserWithAnswer();
            }else {
                throw new Error("올바르지 않은 값이 입력됐습니다.");
            }
        });
    };

    makeThreeUniqueRandomNumber = () => {
        let pickNumber;
        let pickNumberList = [];
        while (pickNumberList.length < 3){
            pickNumber = MissionUtils.Random.pickNumberInRange(1,9);
            if (!pickNumberList.includes(pickNumber)){
                pickNumberList.push(pickNumber);
            }
        }
        return pickNumberList;
    }

    countResult = (result) => {
        this.score[result] += 1;
    }

    compareUserWithAnswer = () => {
        console.log(this.answer,this.userAnswer);
        for (let idx=0; idx<3; idx++){
            if (this.answer[idx] === this.userAnswer[idx]){
                this.countResult("strike");
            }else if (this.answer.includes(this.userAnswer[idx])){
                this.countResult("ball");
            }
        }
        this.printResult();
    }

    printCorrectMessage = () => {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.exitOrRestart();
    }

    exitOrRestart = () => {
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
            if (parseInt(input) === 1){
                this.start();
            }else if (parseInt(input) === 2){
                return;
            }else {
                throw new Error("올바르지 않은 값이 입력됐습니다.");
            }
        });
    }

    printResult = () => {
        let message = "";
        if (this.score["strike"] === 3){
            MissionUtils.Console.print(`${this.score["strike"]}스트라이크`);
            this.printCorrectMessage();
        }else {
            if (!(this.score["strike"] + this.score["ball"])){
                message = "낫싱";
            }
            
            if (this.score["ball"] && this.score["strike"]){
                message = `${this.score["ball"]}볼 `;
            }else if(this.score["ball"] && !this.score["strike"]){
                message = `${this.score["ball"]}볼`;
            }
            
            if (this.score["strike"]){
                message += `${this.score["strike"]}스트라이크`;
            }
            MissionUtils.Console.print(message);
            this.enterUserInput();
        }
    }
}

module.exports = BaseBallGame
