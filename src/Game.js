const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const { exception, pickedWrongChoice } = require("./Exception");
const { GAME, SET } = require("./constants/setting");

class Game {
    constructor() {
        Console.print(GAME.START);
        this.computersNumber = new Computer().pickedNum();
    }

    getStrikeAndBall(computersNumber, usersNumber) {
        let howManyStrike = SET.START_VALUE;
        let howManyBall = SET.START_VALUE;

        usersNumber.forEach((number, idx) => {
            if (number === computersNumber[idx]) howManyStrike++;
            if (number !== computersNumber[idx] && computersNumber.includes(number)) howManyBall++;
        });

        return [howManyStrike, howManyBall];
    }
    
    resultMessage(howManyStrike, howManyBall) {
        if (howManyStrike && !howManyBall) return Console.print(`${howManyStrike}스트라이크`);
        if (!howManyStrike && howManyBall) return Console.print(`${howManyBall}볼`);
        if (howManyStrike && howManyBall) return Console.print(`${howManyBall}볼 ${howManyStrike}스트라이크`);
        return Console.print("낫싱");
    }

    playGame() {
        Console.readLine(GAME.INPUT_NUMBER, usersNumber => {
            exception(usersNumber);
            usersNumber = this.getUsersArray(usersNumber);
  
            const [howManyStrike, howManyBall] = this.getStrikeAndBall(this.computersNumber, usersNumber);
            this.resultMessage(howManyStrike, howManyBall);
            
            if (howManyStrike !== SET.STRIKE) this.playGame();
            if (howManyStrike === SET.STRIKE) this.gameOver();
        });
    }
    
    gameOver() {
        Console.print(GAME.SUCCESS);
        Console.readLine(GAME.RESTART_OR_EXIT, (choice) => {
            if (choice === SET.RESTART) return this.pickedRestart();
            if (choice === SET.EXIT) return this.pickedClose();
            return pickedWrongChoice();
        });
    }

    getUsersArray(usersNumber) {
        return [...usersNumber].map(idx => parseInt(idx));
    }

    pickedRestart() {
        this.computersNumber = new Computer().pickedNum();
        this.playGame();
        return ;
    }

    pickedClose() {
        Console.close();
        return ;
    }

}

module.exports = Game;