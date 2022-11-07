const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants.js");

class GameMessage {
  static start() {
    MissionUtils.Console.print(constants.GAME_MESSAGE.start);
  }  
  static gameover() {
    MissionUtils.Console.print(constants.GAME_MESSAGE.gameover);
  }
  static result(score) {
    let resultMessage = '';
    if(score.ball) resultMessage += `${score.ball}${constants.RESULT_COUNT.ball} `;
    if(score.strike) resultMessage += `${score.strike}${constants.RESULT_COUNT.strike}`;
    if(resultMessage === '') resultMessage = constants.RESULT_COUNT.nothing;
    resultMessage = resultMessage.trim();
    MissionUtils.Console.print(resultMessage);
  }
  static error(messege) {
    throw new Error(messege);
  }  
}

exports.GameMessage = GameMessage;