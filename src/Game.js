const MissionUtils = require("@woowacourse/mission-utils");


class Game{


    getUserInput() {
        MissionUtils.Console.readLine("숫자를 입력해주세요 :", (numbers) => {
            this.checkValidationUserInput(numbers);
        });
    }

    checkValidationUserInput(userNumber) {
        if (isNaN(userNumber) === true) {
          throw "숫자를 입력해주세요.";
        }
        if (userNumber.length !== 3) {
          throw "3자리로 입력해주세요.";
        }
        if (new Set(userNumber).size !== 3) {
          throw "서로 다른 값을 입력해주세요.";
        }
        if(userNumber.includes('0') === true){
            throw "0은 입력하면 안됩니다.";
        }
    }

    
   
    
    
}

const game = new Game();
game.getUserInput();

module.exports = Game;