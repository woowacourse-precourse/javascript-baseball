const { Console } = require("@woowacourse/mission-utils");

async function getAnswer(q) {
  const input = await new Promise((resolve) => {
    Console.readLine(q, resolve);
  });
  return input;
}

module.exports = getAnswer;
