const MissionUtils = require("@woowacourse/mission-utils");


class App {
    constructor(){
        var computerInput;
        
    }

    play(){
        this.computerInput = this.getRandom();
        this.getUserInput();

    }

    getRandom(){
        let computerInput = [];
        while (computerInput.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computerInput.includes(number)) {
                computerInput.push(number);
            }
        }
        console.log("computer" + computerInput);
        return computerInput;

    }

    getUserInput(){
        let userInput = [];
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
            userInput = answer.split('').map((el) => parseInt(el));
            this.checkInput(userInput);
            this.compare(userInput);

            
        });

    }

    checkInput(userArray){
        if (userArray.length > 3) throw "input length > 3";
        if (userArray.includes(NaN)) throw "Input not a number";
        const setCollection = new Set(userArray);
        const isDuplicate = setCollection.size < userArray.length;
        if (isDuplicate) throw "Input includes duplicated numbers";
        let negative = userArray.filter((number) => number <= 0);
        if (negative.length > 0) throw "Input number <= 0";

    }

    compare(userInput){
        let ball = userInput.filter(item => this.computerInput.includes(item));
        let strike = userInput.filter(item => item === this.computerInput[userInput.indexOf(item)]);

        let ballNum = ball.length - strike.length;
        let strikeNum = strike.length;
        
        
        this.print([ballNum, strikeNum]);

    }
    

    print(resultArray){
        if(resultArray[0] + resultArray[1] === 0) MissionUtils.Console.print("낫싱")
        
        else if(resultArray[1] === 3){//3 strike => correct
            MissionUtils.Console.print(`${resultArray[1]}스트라이크`);
            this.restart();
        }
        else{
            if(resultArray[1] === 0){ //only ball
                MissionUtils.Console.print(`${resultArray[0]}볼`); 
    
            }
            else if(resultArray[0] === 0){//only strike
                MissionUtils.Console.print(`${resultArray[1]}스트라이크`); 
                
            }
            else{
                MissionUtils.Console.print(`${resultArray[0]}볼 ${resultArray[1]}스트라이크`); 
            }
            this.getUserInput();
        }
        
    }

    restart(){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n", (answer) => {

            if (answer === "1"){

                console.log(answer);
                app.play();
            }
            else{
                MissionUtils.Console.close();
                
            }  
        });
    }

}

const app = new App();
app.play();





module.exports = App;
