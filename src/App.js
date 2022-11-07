const User = require("./User");
const Computer = require("./Computer");
const BaseBall = require("./BaseBall");

class App {
  
  play(){
    const ui = new User();
    const computer = new Computer();
    const baseball = new BaseBall();

    while(true){
      ui.setState('INGAME');
      
      do{
        baseball.reset();
        ui.scan();
        baseball.referee(ui.getInput(), computer.getBalls());
        ui.print(baseball.getResult());
      }while(!baseball.isEnded());
      
      ui.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      ui.setState('OUTGAME');
      ui.scan();

      if(Number(ui.getInput())===2) break;
      computer.reset();
    }
  }
}

module.exports = App;