const MissionUtils = require('@woowacourse/mission-utils');

let RANDOM_NUMBER;

function generateRandomNumber() {
    RANDOM_NUMBER = parseInt(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('')
    );
    return RANDOM_NUMBER;
}

function startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (response) => {});
}

class App {
    play() {
        generateRandomNumber();
        startGame();
    }
}

module.exports = App;
