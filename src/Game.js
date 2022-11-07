const MissionUtils = require("@woowacourse/mission-utils");

class Game{

    getUserInput() {
        MissionUtils.Console.readLine("숫자를 입력해주세요 :", (numbers) => {
            console.log(numbers)
        });
    }

    
}

const game = new Game();
game.getUserInput();

module.exports = Game;