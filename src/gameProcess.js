const MissionUtils = require("@woowacourse/mission-utils");
const {
	GAME_MESSAGES,
	ERROR_MESSAGES,
	HINT_MESSAGES,
} = require('./constants');
let computerNumber;

function getComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) computer.push(number);
    }
    return computer;
}

function getUserNumbers() {
    MissionUtils.Console.readLine(GAME_MESSAGES.INPUT_USER_NUM_MESSAGE, (input) => {
        countResult(input);
    });
}

function countResult(input) {
    let ball = 0, strike = 0;

    if (new Set(input).size !== 3) throw new Error(ERROR_MESSAGES.WRONG_NUMBER_ERROR_MESSAGE);

    input = input.split('');
    input.map(element => {
        if (isNaN(Number(element)) || element.includes('0')) throw new Error(ERROR_MESSAGES.NOT_VALID_NUMBER_ERROR_MESSAGE);
    });

    for (let i = 0; i < 3; i++){
        if (Number(input[i]) === computerNumber[i]) strike++;
        else if(computerNumber.includes(Number(input[i]))) ball++;
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
    
    return (strike !== 3) ? getUserNumbers() : askRetry();
}

function askRetry() {
    MissionUtils.Console.print(GAME_MESSAGES.GAME_END_MESSAGE, GAME_MESSAGES.GAME_RESTART_MESSAGE);
    MissionUtils.Console.readLine('', (input) => {
        if (input === "1") {
            computerNumber = getComputerNumbers(); 
            getUserNumbers();
        }
        else if (input === "2") return MissionUtils.Console.close();
        else throw new Error(ERROR_MESSAGES.RESTART_ERROR_MESSAGE);
    });
}

function gameStart() {
    computerNumber = getComputerNumbers();
    MissionUtils.Console.print(GAME_MESSAGES.START_MESSAGE);
    getUserNumbers();
}

module.exports = {
    gameStart,
} 
