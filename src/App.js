const MissionUtils = require("@woowacourse/mission-utils");
const {MENTION, REPLAYOREXIT, ANSWER_LENGTH} = require("./constant/constant");
const checkExceptError = require("./util/checkExceptError");
const compareNumbers = require("./util/compareNumbers");
const countBaseBall = require("./util/countBaseBall");
const setRamdomNum = require("./util/setRandomNum");

class App { 
  play() {
    MissionUtils.Console.print(MENTION.START_GAME);
    this.gameSet();
  }

  gameSet() {
    const randomNum = setRamdomNum();
    this.gameStart(randomNum);    
  }

  gameStart(startNum) {     
    MissionUtils.Console.readLine(MENTION.INPUT_NUMBER, (answer) => { 
      if(!checkExceptError(answer)){
        this.ExceptError();
      }

      const playerResult = compareNumbers(answer,startNum); // 볼 스트라이크 출력
      countBaseBall(playerResult.strike, playerResult.ball);
      if(playerResult.strike<ANSWER_LENGTH){
        return this.gameStart(startNum);
      }
      this.gameSelectNum();
    });  
  }

  gameSelectNum() {
    MissionUtils.Console.print(MENTION.CORRECT_ANSWER);
    MissionUtils.Console.readLine(MENTION.SELECT_NUM, (selectNum) => {
      if(selectNum === REPLAYOREXIT.REPLAY) return this.gameSet(); 
      else if(selectNum === REPLAYOREXIT.EXIT) return this.endGame();
      return this.ExceptError();
    });    
  } 
    
  endGame() {
    MissionUtils.Console.close();
  }

  // 예외 발생으로 인한 종료
  ExceptError() {
    throw new Error('숫자 3개만 입력해주세요. 게임을 종료합니다.');
  }
}
  const done = new App();
  done.play();
  
  module.exports = App;
