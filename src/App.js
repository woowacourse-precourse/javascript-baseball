const { Console, Random } = require('@woowacourse/mission-utils');
class App {

  #sayStart() {
    Console.print('숫자 야구 시작합니다.');
  };

  #startGame() {

  };
  
  play() {
    this.#sayStart();
    this.#startGame();
  }
};


module.exports = App;
