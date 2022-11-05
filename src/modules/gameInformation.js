const MissionUtils = require('@woowacourse/mission-utils');
const { isValid } = require('./isValid')
const { generateNumbers } = require('./generateNumbers')
const { isStrikeBallResult } = require('./isStrikeBallResult')

function baseBall(computerInput) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
        if(!isValid(userInput)) throw '잘못된 입력입니다!';
        MissionUtils.Console.print(isStrikeBallResult(computerInput , userInput));
        if(computerInput !== userInput) return baseBall(computerInput)
        if(userInput === computerInput) MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
            if(!(userInput === '1' || userInput === '2')) throw '잘못된 입력입니다!'
            if(userInput === '1') return baseBall(generateNumbers());
            MissionUtils.Console.close();
        })
    })
    return;
}

exports.baseBall = baseBall