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
            this.isMatchNumbers(computerNumbers,userNumbers);
        })
    }

    isMatchNumbers(computerNumbers,userNumbers) {
        if(computerNumbers == userNumbers) {
            const MISSION_UTILS = require("@woowacourse/mission-utils");
            MISSION_UTILS.Console.print('3스트라이크');
            MISSION_UTILS.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            return this.replayGame();
        }
        if(computerNumbers !== userNumbers) {
            this.ballAndStrikeCalc(computerNumbers,userNumbers);
            this.isUserNumbers(computerNumbers);
        }
    }

    replayGame(){
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        MISSION_UTILS.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        MISSION_UTILS.Console.readLine('', (answer) => {
            if(answer == 1) return this.isUserNumbers(this.isComputerNumbers());
            if(answer == 2) return MISSION_UTILS.Console.print('게임 종료');
            if(answer !== 1 && answer !== 2) throw new Error('1 또는 2를 입력하세요.');
        })
    }

    ballAndStrikeCalc(computerPickNumber,userNumbers){
        let ball = 0;
        let strike = 0;
        for(let idex = 0; idex < String(computerPickNumber).length; idex++){
            const OVERLAP_INDEX = String(computerPickNumber).indexOf(String(userNumbers)[idex]);
            if(OVERLAP_INDEX > -1 && OVERLAP_INDEX == idex) strike += 1;
            if(OVERLAP_INDEX > -1 && OVERLAP_INDEX !== idex) ball += 1;         
        }
        return this.isProvideHints(ball,strike);
    }

    isProvideHints(ball,strike) {
        const MISSION_UTILS = require("@woowacourse/mission-utils");
        if(ball == 0 && strike == 0) return MISSION_UTILS.Console.print(`낫싱`);
        if(ball == 0 && strike > 0)  return MISSION_UTILS.Console.print(`${strike}스트라이크`);
        if(ball > 0 && strike == 0)  return MISSION_UTILS.Console.print(`${ball}볼`);
        if(ball > 0 && strike > 0)  return MISSION_UTILS.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
}
module.exports = App;