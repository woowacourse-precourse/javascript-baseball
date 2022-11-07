class App {

    constructor() {
        this.computerNumber = [];
        this.gamePlayerNumber = [];
    }

    play() {
        
    }

    createRandomNumber() {
        const randomNumberList = [];
        while (computer.length < 3) {
            const randomnumber = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!randomNumberList.includes(randomnumber)) {
                    randomNumberList.push(randomnumber);
            }
        }
    }
}

module.exports = App;