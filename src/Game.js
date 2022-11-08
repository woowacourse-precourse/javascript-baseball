const MissionUtils = require("@woowacourse/mission-utils");

class Game {
    constructor() {
        this.userNum = null;
    };

    setUserNumber()
    {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
            this.userNum = answer;
        });

        if (this.userNum.length > 3) throw "잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.";
        if (this.userNum.length < 3) throw "잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.";
        if (isNaN(this.userNum)) throw "잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.";
        if (Number(this.userNum) < 0) throw "잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.";
        else return this.userNum;
    }

    compareNumbers(computerNum) {
        let ball = 0;
        let strike = 0;
        let result;
        for (let i = 0; i < computerNum.length; i++) {
            let num = Number(this.userNum[i]);

            if (computerNum[i] === num) strike++;
            if (computerNum[i] !== num && computerNum.includes(num)) ball++;
        }

        if (ball === 0 && strike === 0) result = "낫싱";
        if (ball === 0 && strike !== 0) result = `${strike}스트라이크`;
        if (ball !== 0 && strike === 0) result = `${ball}볼`;
        if (ball !== 0 && strike !== 0) result = `${ball}볼 ${strike}스트라이크`;

        MissionUtils.Console.print(result);

        if (result === "3스트라이크") {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        }

        return result;
    }
}

module.exports = Game;