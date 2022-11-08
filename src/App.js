const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this._computer = [];
    this._player = [];
    this._is_strike = false;
    this._strike = 0;
    this._ball = 0;
    this._keep_play = true;
    this._game_over = false;
  }

  setting(){
    this._computer = [];
    while(this._computer.length < 3){
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!this._computer.includes(NUMBER))
            this._computer.push(NUMBER);
    }

    this._is_strike = false;
    this._game_over = false;
  }

  play() {
    while(this._keep_play){
      this.setting();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      
      while(!this._game_over){
        this.input();
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
      else if(len < 3){
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

      this._player.forEach((num)=>{
        if(!(num >= 1 && num <= 9)){
            throw new Error("잘못된 값을 입력했습니다. 게임을 종료합니다.");
        }
      });

      this.check();
      
      if(this._is_strike){
        this.end();
      }
  });
  }

  check(){
    this._strike = 0;
    this._ball = 0;
    this._is_strike = false;
    for(let i = 0; i<3 ; i++){
      const INDEX = this._player.indexOf(this._computer[i]);
      if(INDEX > -1){
        if(i === INDEX){
          this._strike += 1;
        }
        else{
          this._ball += 1;
        }
      }      
    }

    if(this._strike == 0){
      if(this._ball == 3){
        MissionUtils.Console.print("3볼");
      }
      
      else if(this._ball == 2){
        MissionUtils.Console.print("2볼");
      }
  
      else if(this._ball == 1){
        MissionUtils.Console.print("1볼");
      }
  
      else{
        MissionUtils.Console.print("낫싱");
      }
    }
  
    else if(this._strike == 1){
      if(this._ball == 2){
        MissionUtils.Console.print("1스트라이크 2볼");
      }
      else if(this._ball == 1){
        MissionUtils.Console.print("1스트라이크 1볼");
      }
      else{
        MissionUtils.Console.print("1스트라이크");
      }
    }
  
    else if(this._strike == 2){
      if(this._ball == 1){
        MissionUtils.Console.print("2스트라이크 1볼");
      }
      else{
        MissionUtils.Console.print("2스트라이크");
      }
    }
  
    else if(this._strike == 3){
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this._is_strike = true;
      this._game_over = true;
    }    
  }

  end(){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
        if(answer == 2){
          this._keep_play = false;
        }
        else if(answer == 1){
          this._keep_play = true;
        }
        else{
          throw new Error("잘못된 값을 입력했습니다. 종료하겠습니다."); 
        }
    });
  }

}

module.exports = App;