const restartOrQuitGame = () => {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (endOption) => {
        if (!isVaildEndOption(endOption)) { 
            throw new Error('잘못된 값입니다. 1 또는 2를 입력해주세요.');
        } 
        return endOption;
    });
    MissionUtils.Console.close();
}

module.exports = restartOrQuitGame;