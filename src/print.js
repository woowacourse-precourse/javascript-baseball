const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants.js");

class GameMessage {
  static start() {
    MissionUtils.Console.print(constants.GAME_MESSAGE.START);
  }  
  static gameover() {
    MissionUtils.Console.print(constants.GAME_MESSAGE.GAMEOVER);
  }
  static result(score) {
    let resultMessage = '';
    if(score.ball) resultMessage += `${score.ball}${constants.RESULT_COUNT.BALL} `;
    if(score.strike) resultMessage += `${score.strike}${constants.RESULT_COUNT.STRIKE}`;
    if(resultMessage === '') resultMessage = constants.RESULT_COUNT.NOTHING;
    MissionUtils.Console.print(resultMessage);
  }
}

exports.GameMessage = GameMessage;