const { Console } = require('@woowacourse/mission-utils');
const Message = require('./assets/Message');
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

class App {
  play() {}
}

module.exports = App;
