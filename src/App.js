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
        console.log("숫자 야구 게임을 시작합니다.");
        
        this.input();
    }
  }

  input(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (PLAYER_NUMBER) => {
      this._player = Array.from(PLAYER_NUMBER)
    });

    console.log("[*] COMPUTER ANSWER:" + this._computer);
    console.log("[*] PLAYER ANSWER: " + this._player);

    if(this._player.length > 3)
      throw new Error("너무 많은 값을 입력했습니다. 게임을 종료합니다.");

    this._player.forEach((num)=>{
      if(!(num >= 1 && num <= 9)){
          throw new Error("잘못된 값을 입력했습니다. 게임을 종료합니다.");
      }
    });
  }

}
module.exports = App;