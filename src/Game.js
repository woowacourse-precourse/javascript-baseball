const Io = require('./Io');
class Game {
  constructor() {
  }

  /**
   * 커맨드를 실행한다.
   * @public 
   * @method
   * @return {} void
   * @description 게임을 시작한다. 클래스 외부에서 호출한다. 
   */
  playCommand () {}
  
  outputResult ({ strike, ball }) {
    if(strike === 3) {
      this.io.output('3스트라이크');
      return true;
    }
    if(strike === 0 && ball === 0) {
      this.io.output('낫싱');
    }
    if(strike !== 0 && ball === 0) {
      this.io.output(`${strike}스트라이크`);
    }
    if(strike === 0 && ball !== 0) {
      this.io.output(`${ball}볼`);
    }
    if(strike !== 0 && ball !== 0) {
      this.io.output(`${strike}스트라이크 ${ball}볼`);
    }
    return false;
  }

  /**
   * - 두 숫자배열을 비교한다.
   * @param {[number, number, number]} computerNumber 
   * @param {[number, number, number]} input 
   * @return {{strike:number, ball:number}}
   */
  compare (computerNumber, input) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      if(computerNumber[i] === input[i]) {
        strike++;
      }else if(computerNumber.includes(input[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  isEnd ({strike}) {
    return strike === 3;
  }

  askReplay () {
    this.io.input('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', this.decideReplay.bind(this));
  }

  decideReplay (input) {
    if(input === '1') {
      this.replay();
      return;
    } else if(input === '2') {
      this.exit();
      return;
    } 
    throw new Error('잘못된 입력입니다.');
  }

  replay () {
    this.playCommand();
  }
  
  exit () {
    this.io.close(); 
  }
}

module.exports = Game;
