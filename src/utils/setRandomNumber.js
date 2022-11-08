const { Random } = require("@woowacourse/mission-utils");
const { GAME_RULE } = require("../constants");

const setRandomNumber = () => {
  let randomNumber = new Set();
  while (randomNumber.size !== GAME_RULE.LENGTH) {
    randomNumber.add(
      Random.pickNumberInRange(
        GAME_RULE.NUMBER_RANGE_START,
        GAME_RULE.NUMBER_RANGE_END,
      ),
    );
  }

  return [...randomNumber].join("");
};

module.exports = setRandomNumber;
