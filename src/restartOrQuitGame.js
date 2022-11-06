const MissionUtils = require("@woowacourse/mission-utils");
const isVaildEndOption = require("./isVaildEndOption");
const createRandomNumbers = require("./createRandomNumbers");
const playGame = require('./playGame');

const restartOrQuitGame = () => {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (endOption) => {
        if (!isVaildEndOption(endOption)) { 
            throw new Error('잘못된 값입니다. 1 또는 2를 입력해주세요.');
        } 
        // 다시 시작
        if (endOption == 1) {
            playGame(createRandomNumbers());
        } 
    });
    // 완전 종료
    MissionUtils.Console.close(); 
}

module.exports = restartOrQuitGame;