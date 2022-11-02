const MissionUtils = require("@woowacourse/mission-utils");
const GameControl = require('./Controller.js');
const constant = require('./Constants');
const randomNum = require('./model/Random');

class App {
  constructor(){
    this.gamecount = 0;
  }
  
  async play() {
    const answer = randomNum();
    this.gamecount += 1;
    if (this.gamecount === 1){
      MissionUtils.Console.print(constant.GAME.START);
    }
    
    const game = new GameControl(answer);

    while(1){
      const input = await game.userInput();
      if (this.checkSuccess(game.userOutput(input))){
        this.restartGame(game);
      };
    }
    
  }

  checkSuccess(resultarray){
    if (resultarray[0] === 3){
      return true;
    }
  }

  async restartGame(game){
    const input =  await game.restartCheck();
    if (input === '1'){
      this.play();
    }
    else if (input === '2'){
      MissionUtils.Console.close();
    }
  }

}

module.exports = App;

const app = new App();
app.play();