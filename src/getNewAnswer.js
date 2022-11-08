const { Random } = require("@woowacourse/mission-utils");
const ANSWER_LENGTH = 3;

function checkDifferentValue(num) {
  return !answer.includes(num);
}

function getRandomValue() {
  return Random.pickNumberInRange(1, 9);
}

function getNewAnswer() {
  answer = [];
  while (answer.length < ANSWER_LENGTH) {
    const newRandomValue = getRandomValue();
    if (checkDifferentValue(newRandomValue)) {
      answer.push(newRandomValue);
    }
  }
  return answer.join("");
}

module.exports = getNewAnswer;
