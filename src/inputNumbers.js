const MissionUtils = require("@woowacourse/mission-utils");
const isVaildNumber = require("./isVaildNumber");

const inputNumbers = () => {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNum) => {
        if (!isVaildNumber(inputNum)) { 
            throw new Error('잘못된 값입니다. 1부터 9까지 서로 다른 3자리 수를 입력하세요.');
        } 
        return String(inputNum).split('');
    });
    MissionUtils.Console.close();
}

module.exports = inputNumbers;