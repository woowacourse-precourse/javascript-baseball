import { MissionUtils } from "@woowacourse/mission-utils";

export default class BaseballGame {
    constructor() {
        this.gameStart();
    }

    // Computer가 1 ~ 9까지 랜덤으로 중복없이 3개의 수를 생성하는 함수 구현
    computerRandomNumber() {
        const computerNumber = [];
        while (computerNumber.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computerNumber.includes(number)) {
                computerNumber.push(number);
            }
        }
        return computerNumber
    };

    // 사용자가 입력한 숫자 유효성 검사 함수 구현
    // 1. 입력된 글자가 3개인지?
    checkUserInputLength(input) {
        if (input.length === 3) {
            return true;
        } else {
            return false;
        }
    };

    // 2. 입력된 글자가 모두 숫자인지?
    checkUserInputType(input) {
        for (let i = 0; i < 3; i++) {
            if (isNaN(Number(input[i]))) {
                return false;
            } else {
                return true;
            }
        }
    };

    // 3. 입력된 숫자가 모두 1 ~ 9 사이인지 확인
    checkUserInputNumberRange(input) {
        for (let i = 0; i < 3; i++) {
            if (Number[input[i]] > 1 || Number[input[i]] < 9) {
                return false
            } else {
                return true
            }
        }
    }

    // 4. 입력된 숫자중 중복된 숫자가 있는지?
    checkUserInputIsDiff(input) {
        let uniqueNumber = new Set(input);
        if (uniqueNumber.size === input.length) {
            return true;
        } else {
            return false;
        }
    }

    // 사용자 입력 숫자 유효성 확인
    checkUserInput(userInput) {
        if (!this.checkUserInputLength(userInput)) {
            console.log('길이가 3개가 아님');
            return false;
        }
        if (!this.checkUserInputType(userInput)) {
            console.log('타입이 숫자가 아님');
            return false;
        }
        if (!this.checkUserInputNumberRange(userInput)) {
            console.log('입력된 숫자가 1 ~ 9 사이가 아님');
            return false;
        }
        if (!this.checkUserInputIsDiff(userInput)) {
            console.log('중복된 숫자가 있음');
            return false;
        }
        return true;
    };

    // 3구 판정 함수 구현(볼, 스트라이크)
    checkingScore(computerNumber, userInputNumber) {
        let score = [0, 0];
        for (let i = 0; i < 3; i++) {
            if (computerNumber[i] == userInputNumber[i]) { // 스트라이크
                score[0] += 1;
            } else if (computerNumber.includes(userInputNumber[i])) { // 볼
                score[1] += 1;
            }
        }
        return score;
    };

    // 판정 결과 함수 구현
    checkResultScore(computerNumber, userInputNumber) {
        const score = this.checkResultScore(computerNumber, userInputNumber);
        let answer = "";

        if (score[0] == 0 && score[1] == 0) {
            answer = "낫싱";
        } else if (score[0] > 0 && score[1] == 0) {
            answer = `${score[0]}스트라이크`;
        } else if (score[0] == 0 && score[1] > 0) {
            answer = `${score[1]}볼`;
        } else if (score[0] > 0 && score[1] > 0) {
            answer = `${score[1]}볼 ${score[0]}스트라이크`
        }
        return answer;
    };

    // 정답 여부 확인 함수 구현(3스트라이크)
    checkStrike(result) {
        if (result == "3스트라이크") {
            return true;
        } else {
            return false;
        }
    };

    // 정답여부에 따른 판정 결과 문자열
    showReulst(answer) {
        const strike = this.checkStrike(answer);
        if (strike) {
            answer = "🎉우와 정답이에요!";
            const submitBtn = document.querySelector('#submit');
            submitBtn.disabled = true;
            return answer;
        }
        return answer;
    };
}
new BaseballGame();