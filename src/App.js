class App {
    play() {
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        MISSION_UTILS.Console.print('숫자 야구 게임을 시작합니다.');
        this.isUserNumbers(this.isComputerNumbers());
    }

    isComputerNumbers() {
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        const COMPUTER_NUMBERS = [];
        while (COMPUTER_NUMBERS.length < 3) {
            const RANDOM_NUMBER = MISSION_UTILS.Random.pickNumberInRange(1, 9);
            if (!COMPUTER_NUMBERS.includes(RANDOM_NUMBER)) COMPUTER_NUMBERS.push(RANDOM_NUMBER);
        }
        return parseInt(COMPUTER_NUMBERS.join(''));
    }

    isUserNumbers(computerNumbers) {
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        return MISSION_UTILS.Console.readLine('숫자를 입력해주세요 : ',(userNumbers) => {
            if(isNaN(userNumbers)) throw new Error('숫자를 입력해주세요.');
            if(userNumbers.toString().length !== 3) throw new Error('3자리 숫자를 입력해주세요.');
            if(new Set(userNumbers).size !== 3) throw new Error('중복되지 않는 숫자를 입력해주세요.');
            if(String(userNumbers).indexOf(0) !== -1) throw new Error('1부터 9의 숫자만 입력해주세요.');
            parseInt(userNumbers);
        });
    }
}
module.exports = App;