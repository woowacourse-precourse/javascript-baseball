const MissionUtils = require("@woowacourse/mission-utils");

function getAnswer() {
  let answer = new Set();
  addNumber(answer);
  answer = [...answer];
  return answer;
}

function addNumber(numbers) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
  numbers.add(randomNumber);
  if(numbers.size < 3) addNumber(numbers);
}

exports.getAnswer = getAnswer;