class App {
    getScore(computer, user) {
        let strike = 0;
        for (let i = 0; i < 3; i++) {
            if (computer[i].toString() === user[i]) {
                strike++
            }
        }
        let ball = 0;
        for (let x of user) {
            if (computer.includes(parseInt(x))) {
                ball++
            }
        }
        ball = ball - strike
        let score = [];
        score.push(strike, ball);
        return score;
    }

    play() {
        let computerNumber = new Set();
        while (computerNumber.size < 3) {
            computerNumber.add(MissionUtils.Random.pickNumberInRange(1, 9))
        }
        computerNumber = Array.from(computerNumber)
        console.log(computerNumber)

        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    }

    read(computerNumber) {
        let userNumber;
        MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
            userNumber = Array.from(number)
        })
    }

}

module.exports = App;
