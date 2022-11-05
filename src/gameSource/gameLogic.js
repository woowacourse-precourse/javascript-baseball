//스트라이크 볼 낫싱, 게임오버 체크
//model이자 view로 써야 할 듯.
const MissionUtils = require("@woowacourse/mission-utils");
const VALIDATIONCHECK = require('./inputCheck');


class GameLogics{

    numberOfStrikes(userInput, answer) {
        let count = 0;
        const ANSWER_TO_STRING = String(answer);
        if (userInput[0] === ANSWER_TO_STRING[0]) count++;
        if (userInput[1] === ANSWER_TO_STRING[1]) count++;
        if (userInput[2] === ANSWER_TO_STRING[2]) count++;
        return count;
    }
    
    numberOfBalls(userInput, answer) {
        let count = 0;
        const ANSWER_TO_STRING = String(answer);
        if (userInput[0] === ANSWER_TO_STRING[1]
            || userInput[0] === ANSWER_TO_STRING[2]) count++;
        if (userInput[1] === ANSWER_TO_STRING[0]
            || userInput[1] === ANSWER_TO_STRING[2]) count++;
        if (userInput[2] === ANSWER_TO_STRING[0]
            || userInput[2] === ANSWER_TO_STRING[1]) count++;
        return count;
    }
    
    getHintFromInput(userInput, answer) {
        const GAMESTART_OR_RESTART = require('./controller');
        if (!VALIDATIONCHECK.checkUserInputDuringGamePlay(userInput)) throw new Error("잘못된 숫자를 입력하였습니다.");
        const strikes = this.numberOfStrikes(userInput, answer);
        const balls = this.numberOfBalls(userInput, answer);
    
        if (strikes === 3) {
            MissionUtils.Console.print('3스트라이크');
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            GAMESTART_OR_RESTART.askQuestionToUserWhenGameEnds();
            return;
        }
        if (strikes === 0 && balls === 0) MissionUtils.Console.print('낫싱');
        else MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
        GAMESTART_OR_RESTART.gamePlayApplication(answer);
    }

}
const GAMELOGICS = new GameLogics();
module.exports = GAMELOGICS;