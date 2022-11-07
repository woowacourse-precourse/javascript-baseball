
class Message{
  static GAME_END = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  static START = '숫자 야구 게임을 시작합니다.';
  static PLEASE_INPUT_NUMBER = '숫자를 입력해주세요 : ';
  

  static NOTHING = '낫싱';
  static STRIKE = '스트라이크';
  static BALL = '볼';

  static ASK_REPLAY= '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
  static REPLAY = 1;
  static NO_REPLAY = 2;


  static gameResult({strike, ball}){
    if(strike === 0 && ball === 0){
      return this.NOTHING;
    }
    return [this.getBallMessage(ball), this.getStrikeMessage(strike)].filter((string)=>string!==null).join(' ');
  }

  static getStrikeMessage(num){
    if(num !==0){
      return `${num}${this.STRIKE}`;
    }
    return '';
  }

  static getBallMessage(num){
    if(num !==0){
      return `${num}${this.BALL}`;
    }
    return null;
  }
  
}

module.exports = Message;