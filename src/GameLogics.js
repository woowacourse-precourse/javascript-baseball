class GameLogics {
    getStrikeCount(userNumber) {
        let strikeCount = 0;
        const ANSWER = this.answer;
        for (let currentCheckingNumber of userNumber) {
          const INDEX = userNumber.indexOf(currentCheckingNumber);
          if (currentCheckingNumber === ANSWER[INDEX]) strikeCount += 1;
        };
        return strikeCount;
      }
    
      getBallCount(userNumber) {
        let ballCount = 0;
        const ANSWER = this.answer;
        for (let currentCheckingNumber of userNumber) {
          const INDEX = userNumber.indexOf(currentCheckingNumber);
          if (currentCheckingNumber !== ANSWER[INDEX] && ANSWER.includes(currentCheckingNumber)) ballCount += 1;
        };
        return ballCount;
      }  
    
      checkNumber(userNumber) {
        const STRIKE_COUNT = this.getStrikeCount(userNumber);
        const BALL_COUNT = this.getBallCount(userNumber);
        const IS_NOTHING = STRIKE_COUNT === 0 && BALL_COUNT === 0;
    
        let hintMessage, isEnd;
    
        if (STRIKE_COUNT === 3) isEnd = true;
    
        if (IS_NOTHING) hintMessage = "낫싱";
        if (BALL_COUNT === 0 && STRIKE_COUNT !== 0) hintMessage = `${STRIKE_COUNT}스트라이크`;
        else if (BALL_COUNT !== 0 && STRIKE_COUNT === 0) hintMessage = `${BALL_COUNT}볼`;
        else if (BALL_COUNT !== 0 && STRIKE_COUNT !== 0) hintMessage = `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;
    
        return [hintMessage, isEnd];
      }
}

const GAME_LOGICS = new GameLogics();
module.exports = GAME_LOGICS;