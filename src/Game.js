const Io = require('./Io');
const Computer = require('./player/Computer.js');
const User = require('./player/User.js');
class Game {
  constructor() {
    this.io = Io;
    this.computer = new Computer();
    this.user = new User();
  }

  /**
   * 커맨드를 실행한다.
   * @public 
   * @method
   * @return {} void
   * @description 게임을 시작한다. 클래스 외부에서 호출한다. 
   */
  playCommand () {
    this.computer.setNumber();
    this.askNumber();
  }

  
  askNumber () {
    this.io.input('숫자를 입력해주세요 : ', this.attempt.bind(this));
  }

  attempt (input) {
    this.user.setNumber(input);
    const result = this.compare(this.computer.getNumber(), this.user.getNumber());
    this.outputResult(result);
    if (this.isEnd(result)) {
      this.outputGameEnd();
      this.askReplay();
    } else {
      this.retry();
    }
  }

  
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
      this.io.output(`${ball}볼 ${strike}스트라이크 `);
    }
    return false;
  }


  outputGameEnd() {
    this.io.output('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
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

  retry(){
    this.askNumber();
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
