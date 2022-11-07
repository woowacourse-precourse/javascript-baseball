const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("./BaseBallGame");
const { CONSOLE_MESSAGE, ERROR_MESSAGE } = require("./constants");
const { exceptionHandle } = require("./util");

class User {
  game;
  constructor() {
    this.game = new BaseBallGame();
  }
  play() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.GetInputAnswer, (inputAnswer) => {
      if(exceptionHandle(inputAnswer))  throw ERROR_MESSAGE.InputError;
      const isPlay = this.game.output(inputAnswer);
      if(isPlay){
        this.play();
        return;
      }
      MissionUtils.Console.print(CONSOLE_MESSAGE.EndGame);
      this.selectRePlay();
    });
  }
  selectRePlay(){
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.SelectReplay, (selectReplay) => {
      if(selectReplay === '1'){
        this.game.getRandomNumber();
        this.play();
        return;
      }
      if(selectReplay === '2'){
        this.finish();
        return;
      }
      throw ERROR_MESSAGE.InputError;
    })
  }
  finish(){
    MissionUtils.Console.close();
  }
}

module.exports = User;
