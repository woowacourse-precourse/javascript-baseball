import { MissionUtils } from "@woowacourse/mission-utils";

export default class BaseballGame {
    constructor() {
        this.gameStart();
    }

    // Computer가 1 ~ 9까지 랜덤으로 중복없이 3개의 수를 생성하는 함수 구현
    computerRandomNumber() {
        let computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
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

}
new BaseballGame();