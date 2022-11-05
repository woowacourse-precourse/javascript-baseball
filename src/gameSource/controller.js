//게임 시작 및 재시작
const MissionUtils = require("@woowacourse/mission-utils");
const GAMELOGICS = require('./gameLogic');
const VALIDATIONCHECK = require('./inputCheck');

const MAKEANSWER = function makeAnswerWithThreeUniqueNumbers() {
    let threeUniqueNumbers = []
    while (threeUniqueNumbers.length < 3) {
        const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        threeUniqueNumbers = CHECK_DUPLICATE(threeUniqueNumbers, RANDOM_NUMBER);
    }
    return threeUniqueNumbers[0] * 100 + threeUniqueNumbers[1] * 10 + threeUniqueNumbers[2] * 1;
}

const CHECK_DUPLICATE = function checkRepeatedElementOfArray(array, target) {
    const ARRAY_COPIED = [...array];
    if (!array.includes(target)) ARRAY_COPIED.push(target)
    return ARRAY_COPIED;
}

class GameStartOrRestart {
    launchNewGame() {
        const ANSWER = MAKEANSWER();
        console.log(ANSWER);
        this.gamePlayApplication(ANSWER);
    }

    gamePlayApplication(answer) {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
            GAMELOGICS.getHintFromInput(userInput, answer);
        });
    }

    restartGame(userInput) {
        if (!VALIDATIONCHECK.checkUserInputAfterGameOver(userInput)) throw new Error("잘못된 숫자를 입력하였습니다.");
        if (+userInput === 1) this.launchNewGame();
        if (+userInput === 2) MissionUtils.Console.close();
    }

    askQuestionToUserWhenGameEnds() {
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userInput) => {
            this.restartGame(userInput);
        });
    }
}
const GAMESTART_OR_RESTART = new GameStartOrRestart();
module.exports = GAMESTART_OR_RESTART;

