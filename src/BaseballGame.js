const { Console } = require('@woowacourse/mission-utils');
const numberGenerator = require('./RandomNumber');
const BaseballReferee= require('./BaseballReferee');

class BaseballGame {
  #randomNumber;

  constructor() {
    this.#randomNumber = numberGenerator.randomNumber();
    this.game = new BaseballReferee(this.#randomNumber);
  }
  
  play(userInput) {
    if(this.isRepeat(userInput)) {
      return this.game.compare(userInput);
    }
  }

  isRepeat(userInput) {
    if(this.game.compare(userInput)) {
      return false;
    }

    return true;
  }

  retry(select) {
    if(select === '1') {
      this.#randomNumber = randomNumber();
      return true;
    }

    return Console.close()
  }
}

module.exports = BaseballGame;