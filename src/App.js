const MissionUtils = require("@woowacourse/mission-utils");
const GameControl = require('./Controller.js')
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
      //console.log(game.userOutput(input));
    }
    
  }

}

module.exports = App;

const app = new App();
app.play();