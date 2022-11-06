const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Game {
    constructor() {
        this.startMessage = new Computer().startMessage();
        this.computersNumber = new Computer().pickedNum();
    }
    
  

    playGame() {    
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", usersNumber => {
            console.log(this.computersNumber);
            
            usersNumber = [...usersNumber].map(idx => parseInt(idx));
            console.log(usersNumber);
            const [ howManyStrike, howManyBall ] = this.getStrikeAndBall(this.computersNumber, usersNumber);
            
            // const compareResult = this.compareBallStrike(howManyStrike, howManyBall);    
            // console.log(compareResult);
            // return compareResult;
            // const [howManyStrike, howManyBall] = this.getStrikeBallCount(this.computersNumber, userNumber);
            console.log(howManyStrike);
            console.log(howManyBall);
            
            return howManyStrike;
        });

        return;
    }

    // 유저와 컴퓨터 대조해서 스트라이크 볼 갯수 리턴
    getStrikeAndBall(computersNumber, usersNumber) {
        let howManyStrike = 0;
        let howManyBall = 0;

        usersNumber.forEach((number, idx) => {
            if (number === computersNumber[idx]) howManyStrike++;
            if (number !== computersNumber[idx] && computersNumber.includes(number)) howManyBall++;
        });
        return [ howManyStrike, howManyBall ];
    }
    

    // 입력된 숫자 대조 결과 리턴
    //compareBallStrike() {
//
    //}
}

const game = new Game;
game.playGame();

module.exports = Game;
