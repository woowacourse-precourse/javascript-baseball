const Player = require("./Player");
const Computer = require("./Computer");
const BaseBall = require("./BaseBall");

class App {
  
  play(){
    const player = new Player();
    const computer = new Computer();
    const baseball = new BaseBall();

    while(true){
      player.setState('INGAME');
      computer.reset();
      
      do{
        baseball.reset();
        player.scan();
        baseball.referee(player.getInput(), computer.getBalls());
        player.print(baseball.getResult());
      }while(!baseball.isEnded());
      
      player.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      player.setState('OUTGAME');
      player.scan();

      if(Number(player.getInput())===2) break;
    }
  }
}

module.exports = App;