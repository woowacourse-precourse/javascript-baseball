const MissionUtils = require("@woowacourse/mission-utils");

function getComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) computer.push(number);
    }
    console.log(computer.join(''))
    return computer.join('');
}

function gameProcess() {
    getComputerNumbers();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        gameHint(answer);
    });
}

function gameHint(number) {
    console.log(number);
}

gameProcess();