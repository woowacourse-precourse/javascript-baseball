const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this._computer = [];
    this._player = [];
  }

  setting(){
    while(this._computer.length < 3){
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!this._computer.includes(NUMBER))
            this._computer.push(NUMBER);
    }
  }

  play() {
    while(true){
      this.setting();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      
      let success = false;
      while(!success){
        this.input();
        MissionUtils.Console.print("[*] COMPUTER: "+ this._computer);
        MissionUtils.Console.print("[*] PLAYER: "+this._player);
    
        success = this.check();
      }

      if(this.end() == 2){
        break;
      }
    }
  }

  input(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (player_number) => {
      let tmp = player_number.split('');
      let len = tmp.length;

      if(len > 3){
        throw new Error("너무 많은 값을 입력했습니다. 게임을 종료합니다.");
      }
      else if(this._player.length < 3){
        throw new Error("너무 적은 값을 입력했습니다. 게임을 종료합니다.");
      }
        
      for(let i = 0; i < len ; i++){
          if(this._player.includes(tmp[i])){
              throw new Error("중복된 값을 입력했습니다. 게임을 종료합니다.");
          }
          else{
              this._player[i] = Number(tmp[i]);
          }
      }
  });
    
    this._player.forEach((num)=>{
      if(!(num >= 1 && num <= 9)){
          throw new Error("잘못된 값을 입력했습니다. 게임을 종료합니다.");
      }
    });
  }

  check(){
    let strike = 0;
    let ball = 0;
    for(let i = 0; i<3 ; i++){
      const INDEX = this._player.indexOf(this._computer[i]);
      MissionUtils.Console.print("[*] INDEX: "+ INDEX);
      if(INDEX > -1){
        if(i === INDEX){
          strike += 1;
        }
        else{
          ball += 1;
        }
      }
      MissionUtils.Console.print("[*] STRIKE: " + strike + " BALL: "+ball);
    }

    if(strike == 0){
      if(ball == 0){
        MissionUtils.Console.print("낫싱");
      }
      else if(ball == 1){
        MissionUtils.Console.print("1볼");
      }
      else if(ball == 2){
        MissionUtils.Console.print("2볼");
      }
      else if(ball == 3){
        MissionUtils.Console.print("3볼");
      }
      else{
        MissionUtils.Console.print("[🚨] 채점에 문제가 생겼습니다.");
      }
    }

    else if(strike == 1){
      if(ball == 1){
        MissionUtils.Console.print("1스트라이크1볼");
      }
      else if(ball == 2){
        MissionUtils.Console.print("1스트라이크2볼");
      }
      else if(ball == 0){
        MissionUtils.Console.print("1스트라이크");
      }
      else{
        MissionUtils.Console.print("[🚨] 채점에 문제가 생겼습니다.");
      }
    }

    else if(strike == 2){
      if(ball == 0){
        MissionUtils.Console.print("2스트라이크");
      }
      else if(ball == 1){
        MissionUtils.Console.print("2스트라이크1볼");
      }
      else{
        MissionUtils.Console.print("[🚨] 채점에 문제가 생겼습니다.");
      }
    }

    else if(strike == 3){
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }

    return false;
  }


}


module.exports = App;