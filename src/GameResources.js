const { Random } = require('@woowacourse/mission-utils');

class GameResources {
    generateAnswer() {
        const ANSWER_TEMPORARY_STORAGE = [];
        while(ANSWER_TEMPORARY_STORAGE.length < 3) {
          const ANSWER_TEMPORARY_NUMBER = Random.pickNumberInRange(1, 9);
          if (!ANSWER_TEMPORARY_STORAGE.includes(ANSWER_TEMPORARY_NUMBER)) ANSWER_TEMPORARY_STORAGE.push(ANSWER_TEMPORARY_NUMBER);
        };
        return ANSWER_TEMPORARY_STORAGE.join('');
      }
    
      isRightForm(userNumber) {
        const REGULAR_EXPRESSION_NUMBER = /^[1-9]+$/;
        const IS_NUMBER = REGULAR_EXPRESSION_NUMBER.test(userNumber);
        const RIGHT_LENGTH = userNumber.length === 3;
        const NOT_DUPLICATE = userNumber[0] !== userNumber[1] && userNumber[1] !== userNumber[2];
        
        return IS_NUMBER && RIGHT_LENGTH && NOT_DUPLICATE;
      }
}

const GAME_RESOUCES = new GameResources();
module.exports = GAME_RESOUCES;