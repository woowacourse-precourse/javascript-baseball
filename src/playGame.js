const MissionUtils = require("@woowacourse/mission-utils");
const inputNumbers = require('./inputNumbers');
const compareWithInput = require('./compareWithInput');
const printCompareResult = require('./printCompareResult');
const restartOrQuitGame = require('./restartOrQuitGame');

const playGame = (computerNum) => {
    // 1. 숫자 입력
    const userNum = inputNumbers(); 

    // 2. 비교 
    const comparedResult = compareWithInput(computerNum, userNum);

    // 3. 결과 출력
    const resultMSG = printCompareResult(...comparedResult);
    
    if(resultMSG) { // 정답일 때
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        restartOrQuitGame();
    } else { // 정답이 아닐 때
        playGame(computerNum);
    }
}

module.exports = playGame;