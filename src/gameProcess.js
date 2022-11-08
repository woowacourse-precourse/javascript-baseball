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
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        countResult(answer);
    });
}

function countResult(answer) {
    let ball = 0, strike = 0;

    if (new Set(answer).size !== 3) throw new Error("서로 다른 3자리 수를 입력해주세요.");

    answer = answer.split('');
    answer.map(element => {
        if (isNaN(Number(element)) || element.includes('0')) throw new Error("1~9 사이의 숫자를 입력하세요.");
    });

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
        if (answer === "1") {
            computerNumber = getComputerNumbers(); 
            gameProcess();
        }
        else if (answer === "2") return MissionUtils.Console.close();
        else throw new Error("1 아니면 2를 입력해주세요.");
    });
}

function gameStart() {
    computerNumber = getComputerNumbers();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    gameProcess();
}

module.exports = {
    gameStart,
} 
