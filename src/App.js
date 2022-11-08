const { Console } = require('@woowacourse/mission-utils');
const Message = require('./assets/Message');
const { getComputerNumber } = require('./utils/getComputerNumber');
const { getBaseballResultMessage } = require('./utils/getBaseballResultMessage');

const playEachRound = (target, input) => {
  const isThreeStrikes = target === input;

  if (isThreeStrikes) {
    Console.print(Message.getCorrect());
    return;
  }

  Console.readLine(Message.INPUT, (answer) => {
    input = answer;

    Console.print(getBaseballResultMessage(target, input));
    playEachRound(target, input);
  });
};

const playNewGame = () => {
  const computerNumber = getComputerNumber();
  let playerNumber = null;

  playEachRound(computerNumber, playerNumber);
};

class App {
  play() {
    Console.print(Message.START);
    playNewGame();
  }
}

module.exports = App;
