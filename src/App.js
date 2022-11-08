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
            if (this.gameOver() === -1) {
                return true
            }
            if (score[0] !== 3) {
                return false
            }
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
            this.isValidLength(number)
            this.isDuplicate(number)
            userNumber = Array.from(number)
            if (this.currentScore(this.getScore(computerNumber, userNumber)) === false) {
                this.read(computerNumber)
            }
        })
    }

    gameOver() {
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (number) => {
            if (number === "1") {
                this.play()
            } else if (number === "2") {
                MissionUtils.Console.close();
                return -1
            } else {
                throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.\n";
            }
        });
    }

    isValidLength(userNumber) {
        if (userNumber.length !== 3) {
            throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.\n";
        }
    }

    isDuplicate(userNumber) {
        let arr = new Set(userNumber);
        arr = [...arr];
        if (arr.length !== 3) {
            throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.\n";
        }
    }

}

module.exports = App;
