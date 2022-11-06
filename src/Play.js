const { consoleUtil, randomUtil } = require("./Utils");

const makeRandomValue = () => {
  const computerValue = [];

  while (computerValue.length < 3) {
    const randomNumber = randomUtil.pickNumberInRange(1, 9);
    if (!computerValue.includes(randomNumber)) {
      computerValue.push(randomNumber);
    }
  }
  return computerValue;
};

const userValue = async () => {
  const userInput = await consoleUtil.readLine("숫자를 입력해주세요 : ");
  if (userInput < 1 || isNaN(userInput) || userInput.length !== 3) {
    throw new Error("3자리 양의 정수를 입력해주세요.");
  }
  return Array.from(userInput, (num) => Number(num));
};

const playing = () => {};

module.exports = playing;
