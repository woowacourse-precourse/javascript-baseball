const MissionUtils = require('@woowacourse/mission-utils');
const GameMessage = require('./Constants/gameMessage');
class App {
  play() {
    MissionUtils.Console.print(GameMessage.WELCOME_MESSAGE);
    MissionUtils.Console.readLine(GameMessage.QUESTION_MESSAGE, (userInput) => {
      return userInput;
    });
  }
}

module.exports = App;
