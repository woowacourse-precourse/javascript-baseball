const MissionUtils = require("@woowacourse/mission-utils");
let computerNumber;

function getComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) computer.push(number);
    }
    return computer;
}

function gameProcess() {
    console.log(computerNumber)
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        countResult(answer);
    });
}

function countResult(answer) {
    let ball = 0, strike = 0;
    answer = answer.split('');

    for (let i = 0; i < 3; i++){
        if (Number(answer[i]) === computerNumber[i]) strike++;
        else if(computerNumber.includes(Number(answer[i]))) ball++;
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

    return (strike !== 3) ? gameProcess() : askRetry();
}

function askRetry() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    MissionUtils.Console.readLine('', (answer) => {
        computerNumber = getComputerNumbers()
        return answer === "1" ? gameProcess() : MissionUtils.Console.close();
    });
}

computerNumber = getComputerNumbers();
MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
gameProcess();