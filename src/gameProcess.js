const MissionUtils = require("@woowacourse/mission-utils");
const computer = [];

function getComputerNumbers() {
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) computer.push(number);
    }
    console.log(computer)
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    return computer;
}

function gameProcess() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
            countResult(answer);
        });
}

function countResult(answer) {
    let ball = 0, strike = 0;
    answer = answer.split('');

    for (let i = 0; i < 3; i++){
        if (Number(answer[i]) === computer[i]) strike++;
        else if(computer.includes(Number(answer[i]))) ball++;
    }
    
    return getHint(ball,strike);
}

function getHint(ball,strike) {
    let hintMessage = '';

    (ball&&strike) ? hintMessage = `${ball}볼 ${strike}스트라이크`
    : ball ? hintMessage = `${ball}볼`
    : strike ? hintMessage = `${strike}스트라이크`
    : hintMessage = `낫싱`
    
    MissionUtils.Console.print(hintMessage);

    return (strike !== 3) ? gameProcess() : hintMessage;
}

getComputerNumbers();
gameProcess();