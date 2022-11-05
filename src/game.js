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

class GetResult {
  constructor(input, answer) {
    this.result = {
      strike: 0,
      ball: 0,
    }
    this.input = input;
    this.answer = answer;
    this.result.strike = this.getStrike(this.input, this.answer);
  }
  getStrike(input, answer) {
    console.log(input);
    let strike = 0;
    input.forEach((inputNumber, idx) => {
      const answerNumber = answer[idx];
      if(inputNumber === answerNumber) strike++;
    });
    return strike;
  }
}

exports.getAnswer = getAnswer;
exports.GetResult = GetResult;