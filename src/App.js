const MissionUtils = require('@woowacourse/mission-utils')

class App {
    constructor() {
        this.computerInput = []
        this.userInput = []
    }

    play() {
        this.computerInput = this.randomMakeNumber()
        this.userInputNumber()
        return
    }

    randomMakeNumber() {
        const computer = []
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9)
            if (!computer.includes(number)) {
                computer.push(number)
            }
        }
        return computer
    }

    

    userInputNumber() {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
            this.userInput = answer.split('')
            MissionUtils.Console.print(this.userInput);
        })
    }
}

const app = new App();
app.play();
module.exports = App