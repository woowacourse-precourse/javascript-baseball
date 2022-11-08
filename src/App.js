const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        // 1. 게임시작 멘트
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        const computerDefinedArr = this.computerDefine();
        this.userInputValue(computerDefinedArr, this.resetResult());
    }
    // 2. 컴퓨터 숫자값 3개 정하기
    computerDefine() {
        const computerDefinedArr = [];
        while (computerDefinedArr.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computerDefinedArr.includes(number)) {
                computerDefinedArr.push(number);
            }
        }
        return computerDefinedArr;
    }

    // 2-1. 결과값 저장
    resetResult() {
        const result = {
            strike: 0,
            ball: 0,
        };
        return result;
    }

    // 3. 사용자 입력 받기
    userInputValue(computerDefinedArr, ansResult) {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
            this.userInputValidate(userInput);
            const compare = this.compare(userInput, computerDefinedArr, ansResult);
            this.compareResultPrint(compare, computerDefinedArr);
        });
    }

    // 4. 받은 입력값 검증하기
    userInputValidate(userInput) {
        const chkStyle = /\d/;
        const checkDuplicate = new Set(userInput.split(""));
        if (![...userInput].includes("0") && userInput.length === 3 && checkDuplicate.size === 3 && chkStyle.test(userInput)) {
            return this;
        }
        throw new Error("잘못된 값을 입력했습니다");
    }

    // 5. 컴퓨터 생성값과 사용자 입력값 비교하기
    compare(userInput, computerDefinedArr, result) {
        for (var i = 0; i < 3; i++) {
            if (userInput[i] == computerDefinedArr[i]) {
                result["strike"] += 1;
            } else {
                if (computerDefinedArr.includes(parseInt(userInput[i]))) {
                    result["ball"] += 1;
                }
            }
        }
        const answerResult = result;
        return answerResult;
    }

    // 6. 비교값에 대한 결과 출력
    compareResultPrint(answerResult, computerDefineNum) {
        if (answerResult["strike"] == 0 && answerResult["ball"] == 0) {
            MissionUtils.Console.print("낫싱");
        } else if (answerResult["strike"] == 3 && answerResult["ball"] == 0) {
            MissionUtils.Console.print(`${answerResult["strike"]}스트라이크`);
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            this.newGameStart();
        } else if (answerResult["strike"] == 0 && answerResult["ball"] > 0) {
            MissionUtils.Console.print(`${answerResult["ball"]}볼`);
        } else if (answerResult["strike"] > 0 && answerResult["ball"] == 0) {
            MissionUtils.Console.print(`${answerResult["strike"]}스트라이크`);
        } else {
            MissionUtils.Console.print(`${answerResult["ball"]}볼 ${answerResult["strike"]}스트라이크`);
        }
        this.userInputValue(computerDefineNum, this.resetResult());
    }

    // 7. 새로운 게임 시작하기
    newGameStart() {
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
            if (answer == 1) {
                this.play();
            } else if (answer == 2) {
                MissionUtils.Console.close();
            } else {
                throw "1과 2만 입력가능";
            }
        });
    }
}
const app = new App();
app.play();

module.exports = App;
