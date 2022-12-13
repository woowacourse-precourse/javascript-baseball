const { createRandomNumber } =require('./BaseballNumberMaker');

class BaseballGame {

    #randomNumber;

    setRandomNumber() {
        this.#randomNumber = createRandomNumber();
      }
    
    getRandomNumber() {
        return this.#randomNumber;
      }
}

module.exports = BaseballGame;