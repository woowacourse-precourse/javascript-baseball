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

    currentScore(score) {
        console.log(score[0], score[1])
        if (score[0] === 0 && score[1] === 0) {
            MissionUtils.Console.print("낫싱")
        } else if (score[0] !== 0 && score[1] === 0) {
            MissionUtils.Console.print(`${score[0]}스트라이크`)
        } else if (score[0] === 0 && score[1] !== 0) {
            MissionUtils.Console.print(`${score[1]}볼`)
        } else if (score[0] !== 0 && score[1] !== 0) {
            MissionUtils.Console.print(`${score[1]}볼 ${score[0]}스트라이크`)
        }
        if (score[0] === 3) {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n")
        }
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
